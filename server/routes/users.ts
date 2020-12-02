import { Router } from "express"
import { check } from "express-validator"
import {
  register_user,
  login_user,
  get_user,
  update_user,
  get_users,
  change_avatar,
} from "../controllers/users"
import auth from "../middlewares/auth.middleware"
// @ts-ignore
import multer from "multer"
const router = Router()

const storage = multer.memoryStorage()
const upload = multer({ storage }).single("avatar")

router.post(
  "/register",
  [
    check("username")
      .isLength({ min: 4, max: 15 })
      .withMessage(
        "Ім'я користувача має містити щонайменше від 4 до 15 символів!"
      ),
    check("email").isEmail().withMessage("Електронна адреса неправильна!"),
    check("password")
      .isLength({ min: 3, max: 25 })
      .withMessage("Пароль повинен містити принаймні від 3 до 25 символів!"),
  ],
  register_user
)

router.post(
  "/login",
  [
    check("email").isEmail().withMessage("Електронна адреса неправильна!"),
    check("password")
      .isLength({ min: 3, max: 25 })
      .withMessage("Пароль повинен містити принаймні від 3 до 25 символів!"),
  ],
  login_user
)

router.get("/get-info/:userId", get_user)

router.post(
  "/update-user-password",
  auth,
  [
    check("username")
      .isLength({ min: 4, max: 15 })
      .withMessage(
        "Ім'я користувача має містити щонайменше від 4 до 15 символів!"
      ),
    check("email").isEmail().withMessage("Електронна адреса неправильна!"),
    check("password")
      .isLength({ min: 3, max: 25 })
      .withMessage("Пароль повинен містити принаймні від 3 до 25 символів!"),
  ],
  update_user
)

router.post(
  "/update-user",
  auth,
  [
    check("username")
      .isLength({ min: 4, max: 15 })
      .withMessage(
        "Ім'я користувача має містити щонайменше від 4 до 15 символів!"
      ),
    check("email").isEmail().withMessage("Електронна адреса неправильна!"),
  ],
  update_user
)

router.get("/users", get_users)

router.post("/change-avatar", auth, upload, change_avatar)

export default router
