import { Router } from "express"
import { create_hrcomplex } from "../controllers/hrcomplex"

const router = Router()

router.post("/create-hrc", create_hrcomplex)

export default router
