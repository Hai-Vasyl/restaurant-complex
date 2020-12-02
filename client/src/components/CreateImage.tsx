import React, { useState } from "react"
import Field from "./Field"
import Button from "./Button"
import PickFileField from "./PickFileField"
import { BsPlus, BsX } from "react-icons/bs"
import { useSelector, useDispatch } from "react-redux"
import { RootStore } from "../redux/store"
import { TOGGLE_CREATE_IMAGE_FORM } from "../redux/types/popup"
import axios from "axios"
import { http } from "../http"
import { SET_NEW_IMAGE } from "../redux/types/images"
import Loader from "./Loader"

const CreateImage: React.FC = () => {
  const hrComplex = "5fbc47e525b10c027c2d5f8b"
  const {
    popup: { createImgForm },
    auth: { token },
  } = useSelector((state: RootStore) => state)
  const dispatch = useDispatch()
  const [image, setImage] = useState<any>("")
  const [form, setForm] = useState([
    { param: "title", title: "Заголовок", value: "", type: "text" },
    { param: "description", title: "Опис", value: "", type: "text" },
  ])
  const [loading, setLoading] = useState(false)

  const handleSubmitForm = async (
    event:
      | React.FormEvent<HTMLFormElement>
      | React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    try {
      event.preventDefault()
      if (!image) {
        return
      }
      setLoading(true)
      let data = new FormData()
      data.append("image", image, image.name)
      form.forEach((field) => {
        data.set(field.param, field.value)
      })
      data.set("hrComplex", hrComplex)

      const res = await axios({
        url: `${http}/image/upload-image`,
        method: "post",
        data,
        headers: token && {
          "Content-Type": "multipart/form-data",
          Authorization: `Basic ${token}`,
        },
      })

      dispatch({ type: SET_NEW_IMAGE, payload: res.data })
      dispatch({ type: TOGGLE_CREATE_IMAGE_FORM })
      setLoading(false)
    } catch (error) {}
  }

  const handleChangeField = (event: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prevForm) =>
      prevForm.map((field) => {
        if (field.param === event.target.name) {
          return { ...field, value: event.target.value }
        }
        return field
      })
    )
  }

  const handleChangeFileField = (event: any) => {
    setImage(event.target.files[0])
  }

  const fields = form.map((field) => {
    return <Field key={field.param} field={field} change={handleChangeField} />
  })

  return (
    <div className={`auth-form ${createImgForm && "auth-form--open"}`}>
      <Loader action={loading} />
      <div className='auth-form__title'>Додати зображення</div>
      <form
        className='auth-form__fields'
        onSubmit={
          image
            ? handleSubmitForm
            : (event) => {
                event.preventDefault
              }
        }
      >
        <PickFileField
          file={image}
          title='Зображення'
          handleChangeFileField={handleChangeFileField}
        />
        {fields}
        <button className='btn-handler'></button>
      </form>
      <div className='auth-form__btns'>
        <Button
          Icon={BsPlus}
          exClass={`btn-primary ${!image && "btn-disabled"}`}
          title='Додати'
          click={image ? handleSubmitForm : () => {}}
        />
        <Button
          Icon={BsX}
          exClass='btn-simple'
          title='Скасувати'
          click={() => dispatch({ type: TOGGLE_CREATE_IMAGE_FORM })}
        />
      </div>
    </div>
  )
}

export default CreateImage
