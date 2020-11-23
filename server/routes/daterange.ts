import { Router } from "express"
import { create_daterange, delete_daterange } from "../controllers/daterange"

const router = Router()

router.post("/create-date-range", create_daterange)
router.post("/delete-date-range/:dateId", delete_daterange)

export default router
