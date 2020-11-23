import { Router } from "express"
import { upload_image, delete_image } from "../controllers/image"
// @ts-ignore
import multer from "multer"
const router = Router()

const storage = multer.memoryStorage()
const upload = multer({ storage }).single("image")

router.post("/upload-image", upload, upload_image)
router.delete("/delete-image/:key", delete_image)

export default router
