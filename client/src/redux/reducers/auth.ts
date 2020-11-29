import {
  FETCH_ERROR_AUTH,
  FETCH_SUCCESS_AUTH,
  FETCH_START_AUTH,
  RESET_ERRORS_AUTH,
  RESET_ERROR_AUTH,
  SET_AUTH,
  UPDATE_AUTH,
  LOGOUT_AUTH,
  IAuthSuccess,
  IAuthError,
  ActionsDispatch,
} from "../types/auth"

interface IInitState extends IAuthSuccess {
  loading: boolean
  errors: IAuthError[]
}

const initUser = {
  ava: "",
  firstname: "",
  lastname: "",
  phone: "",
  bio: "",
  birth: "",
  role: "",
  _id: "",
  username: "",
  email: "",
  password: "",
  date: "",
}

const initState: IInitState = {
  loading: false,
  errors: [],
  user: initUser,
  token: "",
}

const authReducer = (state = initState, action: ActionsDispatch) => {
  switch (action.type) {
    case FETCH_START_AUTH:
      return {
        ...state,
        errors: [],
        loading: true,
      }
    case FETCH_SUCCESS_AUTH:
      const { user: userSuccess, token: tokenSuccess } = action.payload
      localStorage.setItem("auth", JSON.stringify(action.payload))
      return {
        ...state,
        user: userSuccess,
        token: tokenSuccess,
        errors: [],
        loading: false,
      }
    case FETCH_ERROR_AUTH:
      return {
        ...state,
        errors: action.payload,
        loading: false,
      }
    case SET_AUTH:
      const auth = JSON.parse(localStorage.getItem("auth") || "{}")
      if (auth.user) {
        return {
          ...state,
          user: auth.user,
          token: auth.token,
        }
      }
      return state
    case UPDATE_AUTH:
      localStorage.setItem(
        "auth",
        JSON.stringify({ token: state.token, user: action.payload })
      )
      return {
        ...state,
        user: action.payload,
      }
    case LOGOUT_AUTH:
      localStorage.removeItem("auth")
      return {
        ...state,
        user: initUser,
        token: "",
        loading: false,
        errors: [],
      }
    case RESET_ERRORS_AUTH:
      return {
        ...state,
        errors: [],
      }
    case RESET_ERROR_AUTH:
      let stateResetError = [...state.errors]
      const paramResetError = action.payload

      stateResetError = stateResetError.map((error) => {
        if (error.param === paramResetError) {
          return { ...error, msg: "" }
        }
        return error
      })

      return {
        ...state,
        errors: stateResetError,
      }
    default:
      return state
  }
}

export default authReducer
