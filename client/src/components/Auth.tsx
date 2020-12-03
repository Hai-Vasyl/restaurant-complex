import React, { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchAuth } from "../redux/actions/auth"
import { RESET_ERRORS_AUTH, RESET_ERROR_AUTH } from "../redux/types/auth"
import { RESET_POPUP } from "../redux/types/popup"
import { RootStore } from "../redux/store"
import { AiOutlineLogin, AiOutlineCheckCircle } from "react-icons/ai"
import Button from "./Button"
import Field from "./Field"
import Loader from "./Loader"
import "../styles/auth.scss"

const Auth: React.FC = () => {
  const [flipLogin, setFlipLogin] = useState(true)
  const {
    auth: { token, errors, loading },
    popup: { authForm },
  } = useSelector((state: RootStore) => state)
  const dispatch = useDispatch()
  const [form, setForm] = useState([
    {
      param: "username",
      value: "",
      type: "text",
      title: "Ім'я користувача",
      msg: "",
    },
    {
      param: "email",
      value: "",
      type: "email",
      title: "Електронна пошта",
      msg: "",
    },
    {
      param: "password",
      value: "",
      type: "password",
      title: "Пароль",
      msg: "",
    },
  ])

  useEffect(() => {
    if (token) {
      dispatch({ type: RESET_POPUP })
    }
  }, [token])

  useEffect(() => {
    setForm((prevForm) =>
      prevForm.map((field) => {
        let errorMsg = ""
        errors.forEach((error) => {
          if (field.param === error.param) {
            errorMsg = error.msg
          }
        })
        return { ...field, msg: errorMsg }
      })
    )
  }, [errors])

  const onChangeField = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: RESET_ERROR_AUTH, payload: event.target.name })
    setForm((prevForm) =>
      prevForm.map((field) => {
        if (event.target.name === field.param) {
          return { ...field, value: event.target.value }
        }
        return field
      })
    )
  }

  const handleFlipForm = () => {
    setFlipLogin((prevFlip) => !prevFlip)
    dispatch({ type: RESET_ERRORS_AUTH })
  }

  const handleSubmitForm = (
    event:
      | React.FormEvent<HTMLFormElement>
      | React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault()
    try {
      const [username, email, password] = form
      const loginCred = { email: email.value, password: password.value }
      const registerCred = { ...loginCred, username: username.value }

      dispatch(fetchAuth(flipLogin, flipLogin ? loginCred : registerCred))
    } catch (error) {}
  }

  const fields = form.map((field) => {
    return (
      <Field
        key={field.param}
        exClass={flipLogin && field.param === "username" ? "field--close" : ""}
        change={onChangeField}
        field={field}
      />
    )
  })

  return (
    <div className={`auth-form ${authForm && "auth-form--open"}`}>
      <Loader action={loading} />
      <div className='auth-form__title'>
        {flipLogin ? "Увійти" : "Реєстрація"}
      </div>
      <form className='auth-form__fields' onSubmit={handleSubmitForm}>
        {fields}
        <button className='btn-handler'></button>
      </form>
      <div className='auth-form__btns'>
        <Button
          Icon={flipLogin ? AiOutlineLogin : AiOutlineCheckCircle}
          exClass='btn-primary'
          title={flipLogin ? "Увійти" : "Реєстрація"}
          click={handleSubmitForm}
        />
        <Button
          Icon={flipLogin ? AiOutlineCheckCircle : AiOutlineLogin}
          exClass='btn-simple'
          title={flipLogin ? "Реєстрація" : "Увійти"}
          click={handleFlipForm}
        />
      </div>
    </div>
  )
}

export default Auth
