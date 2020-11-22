import { TOGGLE_FORM_AUTH, RESET_POPUP, ActionsDispatch } from "../types/popup"

interface IInitState {
  authForm: boolean
}

const initState: IInitState = {
  authForm: false,
}

const popupReducer = (
  state = initState,
  action: ActionsDispatch
): IInitState => {
  switch (action.type) {
    case TOGGLE_FORM_AUTH:
      return {
        ...state,
        authForm: !state.authForm,
      }
    case RESET_POPUP:
      return {
        authForm: false,
      }
    default:
      return state
  }
}

export default popupReducer
