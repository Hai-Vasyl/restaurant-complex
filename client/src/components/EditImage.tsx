import React, { useState, useEffect } from "react"
import Field from "./Field"
import Button from "./Button"
import { BsPencilSquare, BsX, BsTrash } from "react-icons/bs"
import { useSelector, useDispatch } from "react-redux"
import { RootStore } from "../redux/store"
import { TOGGLE_EDIT_IMAGE_FORM } from "../redux/types/popup"
import { UPDATE_IMAGE, DELETE_IMAGE } from "../redux/types/images"
import axios from "axios"
import { http } from "../http"
import Loader from "./Loader"

const EditImage: React.FC = () => {
  const {
    popup: { editForm, editImage },
    auth: { token },
  } = useSelector((state: RootStore) => state)
  const dispatch = useDispatch()
  const [form, setForm] = useState([
    {
      param: "title",
      title: "Заголовок",
      value: editImage.title,
      type: "text",
    },
    {
      param: "description",
      title: "Опис",
      value: editImage.description,
      type: "text",
    },
  ])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setForm((prevForm) =>
      prevForm.map((field) => {
        let newValue = field.value
        Object.keys(editImage).forEach((keyImage) => {
          if (keyImage === field.param) {
            //@ts-ignore
            newValue = editImage[keyImage]
          }
        })
        return { ...field, value: newValue }
      })
    )
  }, [editImage])

  const handleSubmitForm = async (
    event:
      | React.FormEvent<HTMLFormElement>
      | React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    try {
      event.preventDefault()
      setLoading(true)

      const [title, description] = form

      const res = await axios({
        url: `${http}/image/update-image/${editImage._id}`,
        method: "post",
        data: {
          title: title.value,
          description: description.value,
        },
        headers: token && {
          Authorization: `Basic ${token}`,
        },
      })

      dispatch({ type: UPDATE_IMAGE, payload: res.data })
      dispatch({ type: TOGGLE_EDIT_IMAGE_FORM })
      setLoading(false)
    } catch (error) {}
  }

  const handleRemoveImage = async () => {
    try {
      setLoading(true)

      await axios({
        url: `${http}/image/delete-image/${editImage._id}`,
        method: "delete",
        headers: token && {
          Authorization: `Basic ${token}`,
        },
      })

      dispatch({ type: DELETE_IMAGE, payload: editImage._id })
      dispatch({ type: TOGGLE_EDIT_IMAGE_FORM })
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

  const fields = form.map((field) => {
    return <Field key={field.param} field={field} change={handleChangeField} />
  })

  return (
    <div className={`auth-form ${editForm && "auth-form--open"}`}>
      <Loader action={loading} />
      <div className='auth-form__title'>Редагування зображення</div>
      <div className='edit-form'>
        <img className='edit-form__img' src={editImage.path} alt='image' />
      </div>
      <form className='auth-form__fields' onSubmit={handleSubmitForm}>
        {fields}
        <button className='btn-handler'></button>
      </form>
      <div className='auth-form__btns edit-form__btns'>
        <Button
          Icon={BsPencilSquare}
          exClass='btn-primary'
          title='Оновити'
          click={handleSubmitForm}
        />
        <Button
          Icon={BsTrash}
          exClass='btn-danger'
          title='Видалити'
          click={handleRemoveImage}
        />
        <Button
          Icon={BsX}
          exClass='btn-simple'
          title='Скасувати'
          click={() => dispatch({ type: TOGGLE_EDIT_IMAGE_FORM })}
        />
      </div>
    </div>
  )
}

export default EditImage
