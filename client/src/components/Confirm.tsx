import React, { useState } from "react"
import Button from "../components/Button"
import Field from "../components/Field"
import { BsDashCircle, BsCheckCircle } from "react-icons/bs"
import { useSelector, useDispatch } from "react-redux"
import { RootStore } from "../redux/store"
import { TOGGLE_CONFIRM_FORM } from "../redux/types/popup"
import { UPDATE_DATE } from "../redux/types/dates"
import { IDateRange } from "../interfaces"
import { SET_ERROR_MSG_BOOKING } from "../redux/types/error"
import axios from "axios"
import { http } from "../http"

const Confirm = () => {
  const hrComplex = "5fbc47e525b10c027c2d5f8b"
  const {
    popup: { confirmForm },
    auth: { user, token },
    dates: { dates },
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

      let chosenDates: IDateRange[] = []
      dates.forEach((date) => {
        if (date.chosen) {
          chosenDates.push(date)
        }
      })

      const [firstname, lastname, phone] = form

      localStorage.setItem(
        "auth",
        JSON.stringify({
          user: {
            ...user,
            firstname: firstname.value,
            lastname: lastname.value,
            phone: phone.value,
          },
          token,
        })
      )

      const res = await axios({
        url: `${http}/daterange/booking`,
        method: "post",
        data: {
          dates: chosenDates,
          user: {
            firstname: firstname.value,
            lastname: lastname.value,
            phone: phone.value,
          },
          hrComplex,
        },
        headers: token && {
          Authorization: `Basic ${token}`,
        },
      })

      const { message, dates: resDates } = res.data
      if (resDates && resDates.length) {
        const newDates = [...dates].map((date) => {
          let newDate = date
          resDates.forEach((resDate: IDateRange) => {
            if (date._id === resDate._id) {
              newDate = resDate
            }
          })
          return newDate
        })
        dispatch({ type: SET_ERROR_MSG_BOOKING, payload: message })
        dispatch({ type: UPDATE_DATE, payload: newDates })
      } else {
        const newDates = [...dates].map((date) => {
          if (date.chosen) {
            return { ...date, booked: true, chosen: false }
          }
          return date
        })

        dispatch({ type: UPDATE_DATE, payload: newDates })
      }

      dispatch({ type: TOGGLE_CONFIRM_FORM })
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
