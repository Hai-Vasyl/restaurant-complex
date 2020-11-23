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

    const imageParts = file.originalname.split(".")
    const imageExt = imageParts[imageParts.length - 1]

    const params = {
      Bucket: AWS_BUCKET,
      Key: `${uuidv4()}.${imageExt}`,
      Body: file.buffer,
    }

    // @ts-ignore
    s3.upload(params, (error, data) => {
      if (error) {
        res.status(400).json(`Uploading file error: ${error.message}`)
      }
      res.status(200).send(data)
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
    res.json(`Upload image error: ${error.message}`)
  }
}