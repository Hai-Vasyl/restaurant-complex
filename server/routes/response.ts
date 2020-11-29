import { Router } from "express"
import {
  create_response,
  get_responses,
  delete_response,
} from "../controllers/response"
import auth from "../middlewares/auth.middleware"
const router = Router()

router.post("/create", auth, create_response)
router.post("/get-all", get_responses)
router.delete("/delete/:responseId", auth, delete_response)

export default router
