import { Router } from "express"
import {
  upload_image,
  delete_image,
  get_images,
  update_image,
} from "../controllers/image"
import auth from "../middlewares/auth.middleware"
// @ts-ignore
import multer from "multer"
const router = Router()

const storage = multer.memoryStorage()
const upload = multer({ storage }).single("image")

router.post("/upload-image", auth, upload, upload_image)
router.delete("/delete-image/:imageId", auth, delete_image)
router.post("/all", get_images)
router.post("/update-image/:imageId", auth, update_image)

export default router
