import {
  ActionsDispatch,
  CLEAR_ERROR_MSG_BOOKING,
  SET_ERROR_MSG_BOOKING,
} from "../types/error"

interface IInitState {
  msgBooking: string
}

const initState: IInitState = {
  msgBooking: "",
}

const errorReducer = (state = initState, action: ActionsDispatch) => {
  switch (action.type) {
    case SET_ERROR_MSG_BOOKING:
      return {
        ...state,
        msgBooking: action.payload,
      }
    case CLEAR_ERROR_MSG_BOOKING:
      return {
        ...state,
        msgBooking: "",
      }
    default:
      return state
  }
}

export default errorReducer
