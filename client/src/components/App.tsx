import React, { useEffect, useState } from "react"
import { SET_AUTH } from "../redux/types/auth"
import { useDispatch } from "react-redux"
import { BrowserRouter as Router } from "react-router-dom"
import Routes from "./Routes"
import MainLoader from "../components/MainLoader"

const App: React.FC = () => {
  const [initLoading, setInitLoading] = useState(true)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch({ type: SET_AUTH })
    setTimeout(() => {
      setInitLoading(false)
    }, 2000)
  }, [dispatch])

  if (initLoading) {
    return <MainLoader />
  }
  return (
    <Router>
      <Routes />
    </Router>
  )
}

export default App
