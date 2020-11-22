import React, { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchAuth } from "../redux/actions/auth"
import { RootStore } from "../redux/store"
import { AiOutlineLogin, AiOutlineCheckCircle } from "react-icons/ai"
import Button from "./Button"
import Field from "./Field"

const Auth: React.FC = () => {
  const [flipLogin, setFlipLogin] = useState(true)
  const {
    auth: { token, errors, loading },
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
    setForm((prevForm) =>
      prevForm.map((field) => {
        let errorMsg = ""
        errors.forEach((error) => {
          if (field.param === error.param) {
            errorMsg = error.msg
          }
        })
        if (errorMsg) {
          return { ...field, msg: errorMsg }
        }
        return field
      })
    )
  }, [errors])

  const onChangeField = (event: React.ChangeEvent<HTMLInputElement>) => {
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
  }

  const handleSubmitForm = (
    event:
      | React.FormEvent<HTMLFormElement>
      | React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault()
    try {
    } catch (error) {
      console.log(`Error from auth component: ${error.message}`)
    }
  }

  const fields = form.map((field) => {
    return <Field key={field.param} change={onChangeField} field={field} />
  })

  console.log({ token, errors, loading })

  return (
    <div>
      <form onSubmit={handleSubmitForm}>
        {fields}
        <button className='btn-handler'></button>
      </form>
      <div>
        <Button
          Icon={flipLogin ? AiOutlineLogin : AiOutlineCheckCircle}
          exClass='btn-primary'
          title={flipLogin ? "Sign In" : "Sign Up"}
          click={handleSubmitForm}
        />
        <Button
          Icon={flipLogin ? AiOutlineCheckCircle : AiOutlineLogin}
          exClass='btn-simple'
          title={flipLogin ? "Sign Up" : "Sign In"}
          click={handleFlipForm}
        />
      </div>
    </div>
  )
}

export default Auth
