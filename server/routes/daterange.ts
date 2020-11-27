import { Router } from "express"
import {
  create_daterange,
  delete_daterange,
  get_dateranges,
} from "../controllers/daterange"

const router = Router()

router.post("/all", get_dateranges)
router.post("/create-date-range", create_daterange)
router.delete("/delete-date-range/:dateId", delete_daterange)

export default router
