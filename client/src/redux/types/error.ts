export const SET_ERROR_MSG_BOOKING = "SET_ERROR_MSG_BOOKING"
export const CLEAR_ERROR_MSG_BOOKING = "CLEAR_ERROR_MSG_BOOKING"

interface setErrorMsgBooking {
  type: typeof SET_ERROR_MSG_BOOKING
  payload: string
}

interface clearErrorMsgBooking {
  type: typeof CLEAR_ERROR_MSG_BOOKING
}

export type ActionsDispatch = setErrorMsgBooking | clearErrorMsgBooking
