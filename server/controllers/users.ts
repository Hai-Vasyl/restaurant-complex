import { User } from "../models"
import { validationResult } from "express-validator"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import { config } from "dotenv"
import AWS from "aws-sdk"
import { v4 as uuidv4 } from "uuid"
config()
const { AWS_ID, AWS_SECRET, AWS_BUCKET, JWT_SECRET }: any = process.env

const s3 = new AWS.S3({
  accessKeyId: AWS_ID,
  secretAccessKey: AWS_SECRET,
})

const checkUniqueCred = async (
  username: string,
  email: string,
  userId?: string,
  updatingUser: boolean = false
) => {
  const queryUsername = updatingUser
    ? { _id: { $ne: userId }, username }
    : { username }
  const queryEmail = updatingUser ? { _id: { $ne: userId }, email } : { email }

  const userByUsername = await User.findOne(queryUsername)
  const userByemail = await User.findOne(queryEmail)
  const isUserByUsername =
    userByUsername && Object.values(userByUsername).length
  const isUserByEmail = userByemail && Object.values(userByemail).length
  if (isUserByUsername && isUserByEmail) {
    return {
      errors: [
        { msg: "Ім'я користувача не унікальне!", param: "username" },
        { msg: "Електронна пошта не є унікальною!", param: "email" },
      ],
    }
  } else if (isUserByUsername) {
    return {
      errors: [
        {
          msg: "Користувач з цим іменем користувача вже існує!",
          param: "username",
        },
      ],
    }
  } else if (isUserByEmail) {
    return {
      errors: [
        {
          msg: "Користувач з цією електронною поштою вже існує!",
          param: "email",
        },
      ],
    }
  }
}

export const register_user = async (req: any, res: any) => {
  try {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() })
    }

    const { username, email, password, role, ava } = req.body

    const errorMsgs: any = await checkUniqueCred(username, email)
    if (errorMsgs && errorMsgs.errors && errorMsgs.errors.length) {
      res.staus(400).json(errorMsgs)
    }

    const hashedPassword = await bcrypt.hash(password, 12)

    const user = new User({
      username,
      email,
      role,
      password: hashedPassword,
      ava,
      date: new Date(),
    })
    const newUser = await user.save()

    const token = jwt.sign({ userId: newUser._id }, JWT_SECRET)
    res.status(201).json({ token, user: newUser })
  } catch (error) {
    res.status(400).json(`Register user error: ${error.message}`)
  }
}

export const login_user = async (req: any, res: any) => {
  try {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() })
    }

    const { email, password } = req.body

    const user: any = await User.findOne({ email })
    const isUser = user && Object.values(user).length
    if (!isUser) {
      return res.status(400).json({
        errors: [
          {
            msg: "Користувач з цією електронною поштою не існує!",
            param: "email",
          },
        ],
      })
    }

    const comparedPassword = await bcrypt.compare(password, user.password)
    if (!comparedPassword) {
      return res.status(400).json({
        errors: [
          {
            msg: "Пароль не правильний, спробуйте ще раз!",
            param: "password",
          },
        ],
      })
    }

    const token = jwt.sign({ userId: user._id }, JWT_SECRET)
    res.status(201).json({ token, user })
  } catch (error) {
    res.status(400).json(`Login user error: ${error.message}`)
  }
}

export const get_user = async (req: any, res: any) => {
  try {
    const { userId } = req.params
    const user = await User.findById(userId).select("-password")
    res.json(user)
  } catch (error) {
    res.status(400).json(`Getting user info error: ${error.message}`)
  }
}

export const update_user = async (req: any, res: any) => {
  try {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() })
    }
    const {
      username,
      email,
      firstname,
      lastname,
      phone,
      bio,
      birth,
      password,
    } = req.body
    const { userId } = req

    const errorMsgs: any = await checkUniqueCred(username, email, userId, true)
    if (errorMsgs && errorMsgs.errors && errorMsgs.errors.length) {
      return res.status(400).json(errorMsgs)
    }

    let updateFields: any = {
      username,
      email,
      firstname,
      lastname,
      phone,
      bio,
      birth,
      date: new Date(),
    }
    if (password !== undefined) {
      const newPassword = await bcrypt.hash(password, 12)
      updateFields = { ...updateFields, password: newPassword }
    }

    await User.findByIdAndUpdate(userId, {
      ...updateFields,
    })
    const updatedUser = await User.findById(userId)

    res.json(updatedUser)
  } catch (error) {
    res.status(400).json(`Updating user info error: ${error.message}`)
  }
}

export const get_users = async (req: any, res: any) => {
  try {
    const users = await User.find().select("username email ava role date")

    res.json(users)
  } catch (error) {
    res.status(400).json(`Getting all users error: ${error.message}`)
  }
}

export const change_avatar = async (req: any, res: any) => {
  try {
    const { file, userId } = req

    if (!Object.keys(file).length) {
      return res.status(400).json("File doesn't exists!")
    }

    const user: any = await User.findById(userId)
    if (!(user && user.ava)) {
      return res.status(400).json("User doesn't exists!")
    }

    let userAvaParts = user.ava.split("/")
    userAvaParts = userAvaParts[userAvaParts.length - 1]
    if (
      userAvaParts !==
      "114-1149878_setting-user-avatar-in-specific-size-without-breaking.png"
    ) {
      await s3
        .deleteObject({
          Key: userAvaParts,
          Bucket: AWS_BUCKET,
        })
        .promise()
    }

    const imageParts = file.originalname.split(".")
    const imageExt = imageParts[imageParts.length - 1]

    const params = {
      Bucket: AWS_BUCKET,
      Key: `${uuidv4()}.${imageExt}`,
      Body: file.buffer,
    }

    // @ts-ignore
    s3.upload(params, async (error, data) => {
      if (error) {
        return res
          .status(400)
          .json(`Updating user avatar error: ${error.message}`)
      }

      await User.updateOne({ _id: userId }, { ava: data.Location })
      res.json({ ava: data.Location })
    })
  } catch (error) {
    res.status(400).json(`Changing avatar user error: ${error.message}`)
  }
}
