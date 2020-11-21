import { Router } from "express"
import { check } from "express-validator"
import { register_user, login_user } from "../controllers/users"
const router = Router()

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

export default router
