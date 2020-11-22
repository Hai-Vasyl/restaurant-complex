import {
  FETCH_ERROR_AUTH,
  FETCH_SUCCESS_AUTH,
  FETCH_START_AUTH,
  FetchActionsDispatch,
} from "../types/auth"
import { Dispatch } from "redux"
import axios from "axios"

interface ICredentials {
  username?: string
  email: string
  password: string
}

export const fetchAuth = (
  isLogin: boolean,
  credentials: ICredentials
) => async (dispatch: Dispatch<FetchActionsDispatch>) => {
  try {
    dispatch({ type: FETCH_START_AUTH })
    const res = await axios({
      url: `/auth/${isLogin ? "login" : "register"}`,
      method: "post",
      data: credentials,
    })
    dispatch({ type: FETCH_SUCCESS_AUTH, payload: res.data })
  } catch (error) {
    console.log("ERROR: ", error.response.data.errors)
    dispatch({ type: FETCH_ERROR_AUTH, payload: error.response.data.errors })
  }
}
