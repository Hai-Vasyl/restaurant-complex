import React, { useEffect, useState } from "react"
import axios from "axios"
import { http } from "../http"
import { IUserBrief } from "../interfaces"
import { Link } from "react-router-dom"
import { RiUserSettingsLine } from "react-icons/ri"
import { BsPeople } from "react-icons/bs"
import { useSelector } from "react-redux"
import { RootStore } from "../redux/store"
import moment from "moment"
import MainLoader from "../components/MainLoader"
import Title from "../components/Title"
import "../styles/users.scss"

const Users: React.FC = () => {
  const [users, setUsers] = useState<IUserBrief[]>([])
  const [initLoad, setInitLoad] = useState(true)
  const {
    auth: { user: userAuth },
  } = useSelector((state: RootStore) => state)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios({
          url: `${http}/auth/users`,
          method: "get",
        })

        setInitLoad(false)
        setUsers(res.data)
      } catch (error) {}
    }

    fetchData()
  }, [http])

  if (initLoad) {
    return (
      <div className='wrapper'>
        <MainLoader />
      </div>
    )
  }

  return (
    <div className='wrapper'>
      <Title Icon={BsPeople} title='Користувачі' />
      <div className='users-wrapper'>
        {users.map((user) => {
          return (
            <div className='user-link' key={user._id}>
              <Link
                className='user-link__img-container'
                to={`/user/${user._id}`}
              >
                <img
                  className='user-link__img-ava'
                  src={user.ava}
                  alt='userAva'
                />
                {user.role === "admin" && (
                  <RiUserSettingsLine className='user-link__role' />
                )}
              </Link>
              <div className='user-link__content'>
                <Link className='user-link__username' to={`/user/${user._id}`}>
                  {user.username}{" "}
                  {user._id === userAuth._id && (
                    <span className='user-link__pointer'>(Ви)</span>
                  )}
                </Link>
                <p className='user-link__email'>{user.email}</p>
                <div className='user-link__date'>
                  Останнє оновлення:{" "}
                  <span className='user-link__date-text'>
                    {moment(user.date).calendar()}
                  </span>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Users
