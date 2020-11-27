import React, { useState } from "react"
import Button from "../components/Button"
import Field from "../components/Field"
import { BsDashCircle, BsCheckCircle } from "react-icons/bs"
import { useSelector, useDispatch } from "react-redux"
import { RootStore } from "../redux/store"
import { TOGGLE_CONFIRM_FORM } from "../redux/types/popup"
import axios from "axios"

const Confirm = () => {
  const {
    popup: { confirmForm },
    auth: { user },
  } = useSelector((state: RootStore) => state)
  const dispatch = useDispatch()
  const [form, setForm] = useState([
    {
      param: "firstname",
      value: user.firstname ? user.firstname : "",
      msg: "",
      type: "text",
      title: "Ім'я",
    },
    {
      param: "lastname",
      value: user.lastname ? user.lastname : "",
      msg: "",
      type: "text",
      title: "Прізвище",
    },
    {
      param: "phone",
      value: user.phone ? user.phone : "",
      msg: "",
      type: "text",
      title: "Телефон",
    },
  ])

  const handleChangeField = (event: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prevForm) =>
      prevForm.map((field) => {
        if (event.target.name === field.param) {
          return { ...field, value: event.target.value, msg: "" }
        }
        return field
      })
    )
  }

  const handleCancel = () => {
    dispatch({ type: TOGGLE_CONFIRM_FORM })
  }

  const handleSubmitForm = async (
    event:
      | React.FormEvent<HTMLFormElement>
      | React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    try {
      event.preventDefault()
      const res = await axios({
        url: ``,
        method: "post",
        data: {
          data: "",
        },
      })
    } catch (error) {}
  }

  const fields = form.map((field) => {
    return <Field key={field.param} field={field} change={handleChangeField} />
  })

  return (
    <div className={`auth-form ${confirmForm && "auth-form--open"}`}>
      <div className='auth-form__title'>Підтвердження</div>
      <form className='auth-form__fields' onSubmit={handleSubmitForm}>
        {fields}
        <button className='btn-handler'></button>
      </form>
      <div className='auth-form__btns'>
        <Button
          Icon={BsCheckCircle}
          exClass='btn-primary'
          title='Приняти'
          click={handleSubmitForm}
        />
        <Button
          Icon={BsDashCircle}
          exClass='btn-simple'
          title='Скасувати'
          click={handleCancel}
        />
      </div>
    </div>
  )
}

export default Confirm
