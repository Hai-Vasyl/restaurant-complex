import React from "react"
import { Route, Switch, Redirect } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { RootStore } from "../redux/store"
import routes, { IRoute } from "../modules/routes"
import { RESET_POPUP } from "../redux/types/popup"
import Auth from "./Auth"
import Navbar from "./Navbar"

const Routes: React.FC = () => {
  const {
    auth: { token, user },
    popup: { authForm, popupImg },
  } = useSelector((state: RootStore) => state)
  const dispatch = useDispatch()

  const reduceMapRoutes = (routes: IRoute[]) => {
    return routes.map((route) => {
      return <Route key={route.path} {...route} component={route.component} />
    })
  }

  return (
    <>
      <Navbar />
      <Auth />
      <div
        onClick={() => dispatch({ type: RESET_POPUP })}
        className={`background ${
          (authForm || popupImg) && "background--active"
        }`}></div>
      {token ? (
        user.role === "admin" ? (
          <Switch>
            {reduceMapRoutes(routes.admin)}
            <Redirect to='/' />
          </Switch>
        ) : (
          <Switch>
            {reduceMapRoutes(routes.user)}
            <Redirect to='/' />
          </Switch>
        )
      ) : (
        <Switch>
          {reduceMapRoutes(routes.unregUser)}
          <Redirect to='/' />
        </Switch>
      )}
    </>
  )
}

export default Routes
