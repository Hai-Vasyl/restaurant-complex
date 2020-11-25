import {
  TOGGLE_FORM_AUTH,
  RESET_POPUP,
  TOGGLE_POPUP_IMG,
  ActionsDispatch,
} from "../types/popup"

interface IInitState {
  authForm: boolean
  popupImg: boolean
}

const initState: IInitState = {
  authForm: false,
  popupImg: false,
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
    case TOGGLE_POPUP_IMG:
      return {
        ...state,
        popupImg: !state.popupImg,
      }
    case RESET_POPUP:
      return {
        authForm: false,
        popupImg: false,
      }

    default:
      return state
  }
}

export default popupReducer
