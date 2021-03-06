import React, { useEffect, useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { RootStore } from "../redux/store"
import axios from "axios"
import { IUser } from "../interfaces"
import { http } from "../http"
import { useParams, useHistory } from "react-router-dom"
import { RiUserSettingsLine } from "react-icons/ri"
import moment from "moment"
import Field from "../components/Field"
import Button from "../components/Button"
import { BsCheck, BsX, BsInfoCircle, BsGear } from "react-icons/bs"
import { IAuthError, UPDATE_AUTH, LOGOUT_AUTH } from "../redux/types/auth"
import { AiOutlineLogout } from "react-icons/ai"
import MainLoader from "../components/MainLoader"
import "../styles/profile.scss"

const Profile: React.FC = () => {
  const history = useHistory()
  const {
    auth: { user, token },
  } = useSelector((state: RootStore) => state)
  const dispatch = useDispatch()
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
      title: "Новий пароль",
      msg: "",
      type: "password",
    },
  ])
  const [flipToForm, setFlipToForm] = useState(false)
  const [changed, setChanged] = useState(false)
  const [initLoading, setInitLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios({
          url: `${http}/auth/get-info/${userId}`,
          method: "get",
        })
        setInitLoading(false)
        setUserData(res.data)
      } catch (error) {}
    }

    if (!isAuthProfile) {
      fetchData()
    } else {
      setInitLoading(false)
    }
  }, [http, userId, isAuthProfile])

  const handleChangeImage = async (event: any) => {
    const image = event.target.files[0]
    if (!image) {
      return
    }

    let data = new FormData()
    data.append("avatar", image, image.name)

    const res = await axios({
      url: `${http}/auth/change-avatar`,
      method: "post",
      data,
      headers: token && {
        Authorization: `Basic ${token}`,
      },
    })
    const { ava } = res.data
    dispatch({ type: UPDATE_AUTH, payload: { ...user, ava } })
    setUserData({ ...userData, ava })
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
    setChanged(true)
  }

  const handleApplyForm = async (
    event:
      | React.FormEvent<HTMLFormElement>
      | React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    try {
      event.preventDefault()

      const [
        username,
        email,
        firstname,
        lastname,
        phone,
        bio,
        birth,
        password,
      ] = form

      const res = await axios({
        url: `${http}/auth/${
          password.value.length ? "update-user-password" : "update-user"
        }`,
        method: "post",
        data: {
          username: username.value,
          email: email.value,
          firstname: firstname.value,
          lastname: lastname.value,
          phone: phone.value,
          bio: bio.value,
          birth: birth.value,
          password: password.value.length ? password.value : undefined,
        },
        headers: token && {
          Authorization: `Basic ${token}`,
        },
      })

      setUserData(res.data)
      dispatch({ type: UPDATE_AUTH, payload: res.data })
      setChanged(false)
    } catch (error) {
      const errors = error.response.data.errors || []
      setForm((prevForm) =>
        prevForm.map((field) => {
          let errorMsg = ""
          errors.forEach((err: IAuthError) => {
            if (err.param === field.param) {
              errorMsg = err.msg
            }
          })
          return { ...field, msg: errorMsg }
        })
      )
    }
  }

  const handleResetFrom = () => {
    setForm((prevForm) =>
      prevForm.map((field) => {
        let finalField = field
        Object.keys(user).map((keyField) => {
          if (field.param === keyField) {
            finalField = {
              ...field,
              value:
                keyField === "birth" && !user[keyField]
                  ? ""
                  : keyField === "password"
                  ? ""
                  : user[keyField],
            }
          }
        })
        return { ...finalField, msg: "" }
      })
    )
    setChanged(false)
  }

  const handleLogOut = () => {
    dispatch({ type: LOGOUT_AUTH })
    history.push("/")
  }

  const checkFieldsEmpty = () => {
    let isEmptyField = false
    form.forEach((field) => {
      if (field.important && !field.value.trim().length) {
        isEmptyField = true
      }
    })
    return isEmptyField
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

  const isEmptyField = checkFieldsEmpty()

  if (initLoading) {
    return (
      <div className='wrapper'>
        <MainLoader />
      </div>
    )
  }

  return (
    <div className='wrapper'>
      <div className='user-info'>
        <div className='user-info__preview'>
          <div className='user-info__btn-change-img'>
            <label className='user-info__btn-change'>
              <img
                src={userData.ava}
                alt='userAva'
                className='user-info__ava'
              />
              <RiUserSettingsLine className='user-info__icon-type' />
              {isAuthProfile && (
                <input
                  type='file'
                  onChange={handleChangeImage}
                  className='user-info__btn-file'
                />
              )}
            </label>
          </div>
          {isAuthProfile && (
            <Button
              exClass='btn-simple btn-logout'
              Icon={AiOutlineLogout}
              click={handleLogOut}
              title='Вийти'
            />
          )}
        </div>
        <div className='user-info-wrapper'>
          <div className='user-tabs'>
            <button
              onClick={() => (isAuthProfile ? setFlipToForm(false) : () => {})}
              className={`user-tabs__tab ${
                !flipToForm && "user-tabs__tab--active"
              }`}
            >
              <BsInfoCircle className='user-tabs__icon' />
              <span className='user-tabs__title'>Інформація</span>
            </button>
            {isAuthProfile && (
              <button
                onClick={() => setFlipToForm(true)}
                className={`user-tabs__tab ${
                  flipToForm && "user-tabs__tab--active"
                }`}
              >
                <BsGear className='user-tabs__icon' />
                <span className='user-tabs__title'>Налаштування</span>
              </button>
            )}
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
            <form
              onSubmit={
                !changed || isEmptyField
                  ? (event) => {
                      event.preventDefault()
                    }
                  : handleApplyForm
              }
              className='user-form__fields'
            >
              {fields}
              <button className='btn-handler'></button>
            </form>
            <div className='user-form__btns'>
              <Button
                exClass={`btn-primary ${!changed && "btn-disabled"} ${
                  isEmptyField && "btn-disabled"
                }`}
                click={!changed || isEmptyField ? () => {} : handleApplyForm}
                title='Застосувати'
                Icon={BsCheck}
              />
              <Button
                exClass={`btn-simple ${!changed && "btn-disabled"}`}
                click={!changed ? () => {} : handleResetFrom}
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
