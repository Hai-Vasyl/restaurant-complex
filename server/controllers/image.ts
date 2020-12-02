import { Image } from "../models"
import AWS from "aws-sdk"
import { config } from "dotenv"
import { v4 as uuidv4 } from "uuid"
config()
const { AWS_ID, AWS_SECRET, AWS_BUCKET } = process.env

const s3 = new AWS.S3({
  accessKeyId: AWS_ID,
  secretAccessKey: AWS_SECRET,
})

export const upload_image = async (req: any, res: any) => {
  try {
    const { file } = req
    const { hrComplex, title, description } = req.body

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
        return res.status(400).json(`Uploading file error: ${error.message}`)
      }

      const image = new Image({
        path: data.Location,
        hrComplex,
        title,
        description,
        date: new Date(),
      })
      const newImage = await image.save()

      res.status(200).send(newImage)
    })
  } catch (error) {
    res.json(`Upload image error: ${error.message}`)
  }
}

export const delete_image = async (req: any, res: any) => {
  try {
    const { key } = req.params

    // @ts-ignore
    await s3
      .deleteObject({
        Key: key,
        Bucket: AWS_BUCKET,
      })
      .promise()

    return {}
  } catch (error) {
    res.json(`Deleting image error: ${error.message}`)
  }
}

export const get_images = async (req: any, res: any) => {
  try {
    const { hrComplex } = req.body

    const images = await Image.find({ hrComplex }).sort({ date: -1 })

    res.json(images)
  } catch (error) {
    res.json(`Getting images error: ${error.message}`)
  }
}

export const update_image = async (req: any, res: any) => {
  try {
    const { title, description } = req.body
    const { imageId } = req.params

    const image = await Image.updateOne(
      { _id: imageId },
      { title, description }
    )
    const updatedImage = await Image.findById(imageId)

    res.json(updatedImage)
  } catch (error) {
    res.json(`Updating image error: ${error.message}`)
  }
}
