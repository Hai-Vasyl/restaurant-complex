import { Router } from "express"
import { create_hrcomplex, get_hrcomplex } from "../controllers/hrcomplex"

const router = Router()

router.post("/create-hrc", create_hrcomplex)
router.post("/get-info", get_hrcomplex)

export default router
