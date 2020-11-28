import { Router } from "express"
import {
  create_daterange,
  delete_daterange,
  get_dateranges,
  book_dateranges,
  ordered_dateranges,
} from "../controllers/daterange"
import auth from "../middlewares/auth.middleware"

const router = Router()

router.post("/all", get_dateranges)
router.post("/create-date-range", auth, create_daterange)
router.delete("/delete-date-range/:dateId", auth, delete_daterange)
router.post("/booking", auth, book_dateranges)
router.post("/ordered", auth, ordered_dateranges)

export default router
