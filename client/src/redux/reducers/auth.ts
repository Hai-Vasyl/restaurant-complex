import {
  FETCH_ERROR_AUTH,
  FETCH_SUCCESS_AUTH,
  FETCH_START_AUTH,
  IAuthSuccess,
  IAuthError,
  ActionsDispatch,
} from "../types/auth"

interface IInitState extends IAuthSuccess {
  loading: boolean
  errors: IAuthError[]
}

const initState: IInitState = {
  loading: false,
  errors: [],
  user: {
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
  },
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
    default:
      return state
  }
}

export default authReducer
