import React from "react"
import { getLinks } from "../modules/routes"
import { useSelector, useDispatch } from "react-redux"
import { RootStore } from "../redux/store"
import { NavLink } from "react-router-dom"
import { GiMountaintop } from "react-icons/gi"
import { AiOutlineLogin } from "react-icons/ai"
import { TOGGLE_FORM_AUTH } from "../redux/types/popup"
import { RESET_POPUP } from "../redux/types/popup"
import "../styles/navbar.scss"

const Navbar: React.FC = () => {
  const {
    auth: { token, user },
    popup: { authForm },
  } = useSelector((state: RootStore) => state)
  const dispatch = useDispatch()

  const hadleResetPopup = () => {
    dispatch({ type: RESET_POPUP })
  }

  const links = getLinks(user._id, user.username)
  return (
    <div className='nav'>
      <div className='nav__menu'>
        <NavLink exact to='/' className='logo-link' onClick={hadleResetPopup}>
          <GiMountaintop className='logo-link__logo' />
          <span className='logo-link__title'>Art-Village</span>
        </NavLink>
        {links.map(({ Icon, ...link }) => {
          const isProfileLink = link.to === `/user/${user._id}`
          if (
            (isProfileLink ||
              link.to === "/orders" ||
              link.to === "/booking") &&
            !token
          ) {
            return
          } else if (
            link.to === "/create-date-range" &&
            user.role !== "admin"
          ) {
            return
          }
          return (
            <NavLink
              key={link.to}
              exact={link.exact}
              className={`${link.className} ${
                isProfileLink && "link-extended"
              }`}
              onClick={hadleResetPopup}
              activeClassName={link.activeClassName}
              to={link.to}>
              {isProfileLink ? (
                <>
                  <span className='link__img-wrapper'>
                    <img className='link__img' src={user.ava} alt='userAva' />
                  </span>
                  <span className='link__title'>{link.title}</span>
                </>
              ) : (
                <>
                  <Icon className='link__icon' />
                  <span className='link__title'>{link.title}</span>
                </>
              )}
            </NavLink>
          )
        })}
        {!token && (
          <button
            className={`link ${authForm && "link--active"}`}
            onClick={() => dispatch({ type: TOGGLE_FORM_AUTH })}>
            <AiOutlineLogin className='link__icon' />
            <span className='link__title'>Увійти</span>
          </button>
        )}
      </div>
    </div>
  )
}

export default Navbar
