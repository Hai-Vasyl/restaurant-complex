import { Router } from "express"
import { create_response } from "../controllers/response"
import auth from "../middlewares/auth.middleware"
const router = Router()

router.post("create", auth, create_response)

export default router
