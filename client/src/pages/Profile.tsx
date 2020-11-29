import React, { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { RootStore } from "../redux/store"
import axios from "axios"
import { IUser } from "../interfaces"
import { http } from "../http"
import { useParams } from "react-router-dom"
import { RiUserSettingsLine } from "react-icons/ri"
import moment from "moment"
import Field from "../components/Field"
import Button from "../components/Button"
import { BsCheck, BsX, BsInfoCircle, BsGear } from "react-icons/bs"
import "../styles/profile.scss"

const Profile: React.FC = () => {
  const {
    auth: { user, token },
  } = useSelector((state: RootStore) => state)
  const { userId }: { userId: string } = useParams()
  const isAuthProfile = token && user._id === userId
  const [userData, setUserData] = useState<IUser>(
    isAuthProfile
      ? user
      : {
          ava: "",
          bio: "",
          birth: "",
          date: "",
          email: "",
          firstname: "",
          lastname: "",
          password: "",
          phone: "",
          role: "",
          username: "",
          _id: "",
        }
  )
  const [form, setForm] = useState([
    {
      param: "username",
      value: user.username,
      title: "Ім'я користувача",
      msg: "",
      type: "text",
      important: true,
    },
    {
      param: "email",
      value: user.email,
      title: "Електронна адреса",
      msg: "",
      type: "email",
      important: true,
    },
    {
      param: "firstname",
      value: user.firstname,
      title: "Ім'я",
      msg: "",
      type: "text",
    },
    {
      param: "lastname",
      value: user.lastname,
      title: "Прізвище",
      msg: "",
      type: "text",
    },
    {
      param: "phone",
      value: user.phone,
      title: "Телефон",
      msg: "",
      type: "text",
    },
    { param: "bio", value: user.bio, title: "Про себе", msg: "", type: "text" },
    {
      param: "birth",
      value: user.birth ? user.birth : "",
      title: "Дата народження",
      msg: "",
      type: "date",
    },
    {
      param: "password",
      value: "",
      title: "Пароль",
      msg: "",
      type: "password",
      important: true,
    },
  ])
  const [flipToForm, setFlipToForm] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios({
          url: `${http}/auth/get-info/${userId}`,
          method: "get",
        })
        setUserData(res.data)
      } catch (error) {}
    }

    if (!isAuthProfile) {
      fetchData()
    }
  }, [http, userId, isAuthProfile])

  const handleChangeImage = () => {
    console.log("change image")
  }

  const handleChangeField = (event: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prevForm) =>
      prevForm.map((field) => {
        if (field.param === event.target.name) {
          return { ...field, value: event.target.value, msg: "" }
        }
        return field
      })
    )
  }

  const handleApplyForm = (
    event:
      | React.FormEvent<HTMLFormElement>
      | React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    try {
      event.preventDefault()
      console.log("Apply form")
    } catch (error) {}
  }

  const handleResetFrom = () => {
    console.log("Reset form")
  }

  const fields = form.map((field) => {
    return (
      <Field
        key={field.param}
        exClass={field.param === "birth" ? "field__date-birth" : ""}
        field={field}
        change={handleChangeField}
      />
    )
  })

  console.log(userData)
  return (
    <div className='wrapper'>
      <div className='user-info'>
        <div className='user-info__preview'>
          <div className='user-info__btn-change-img'>
            <label className='user-info__btn-change'>
              <img
                src={userData.ava}
                alt='userAva'
                onChange={handleChangeImage}
                className='user-info__ava'
              />
              <RiUserSettingsLine className='user-info__icon-type' />
              <input type='file' className='user-info__btn-file' />
            </label>
          </div>
        </div>
        <div className='user-info-wrapper'>
          <div className='user-tabs'>
            <button
              onClick={() => setFlipToForm(false)}
              className={`user-tabs__tab ${
                !flipToForm && "user-tabs__tab--active"
              }`}>
              <BsInfoCircle className='user-tabs__icon' />
              <span className='user-tabs__title'>Інформація</span>
            </button>
            <button
              onClick={() => setFlipToForm(true)}
              className={`user-tabs__tab ${
                flipToForm && "user-tabs__tab--active"
              }`}>
              <BsGear className='user-tabs__icon' />
              <span className='user-tabs__title'>Налаштування</span>
            </button>
          </div>
          <div className={`user ${flipToForm && "user--close"}`}>
            <h3 className='user__username'>{userData.username}</h3>
            <div className='section-user'>
              Електронна адреса:{" "}
              <span className='section-user__text'>{userData.email}</span>
            </div>
            <div className='section-user'>
              Ім'я:{" "}
              {userData.firstname ? (
                <span className='section-user__text'>{userData.firstname}</span>
              ) : (
                <span className='section-user__plug'>Пусто</span>
              )}
            </div>
            <div className='section-user'>
              Прізвище:{" "}
              {userData.lastname ? (
                <span className='section-user__text'>{userData.lastname}</span>
              ) : (
                <span className='section-user__plug'>Пусто</span>
              )}
            </div>
            <div className='section-user'>
              Телефон:{" "}
              {userData.phone ? (
                <span className='section-user__text'>{userData.phone}</span>
              ) : (
                <span className='section-user__plug'>Пусто</span>
              )}
            </div>
            <div className='section-user'>
              Про себе:{" "}
              {userData.bio ? (
                <span className='section-user__text'>{userData.bio}</span>
              ) : (
                <span className='section-user__plug'>Пусто</span>
              )}
            </div>
            <div className='section-user'>
              Дата народження:{" "}
              {userData.birth ? (
                <span className='section-user__text'>
                  {moment(userData.birth).calendar()}
                </span>
              ) : (
                <span className='section-user__plug'>Пусто</span>
              )}
            </div>
            <div className='section-user__date'>
              Останнє оновлення:{" "}
              <span className='section__text'>
                {moment(userData.date).calendar()}
              </span>
            </div>
          </div>
          <div className={`user-form ${!flipToForm && "user-form--close"}`}>
            <form onSubmit={handleApplyForm} className='user-form__fields'>
              {fields}
              <button className='btn-handler'></button>
            </form>
            <div className='user-form__btns'>
              <Button
                exClass='btn-primary'
                click={handleApplyForm}
                title='Застосувати'
                Icon={BsCheck}
              />
              <Button
                exClass='btn-simple'
                click={handleResetFrom}
                title='Скасувати'
                Icon={BsX}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
