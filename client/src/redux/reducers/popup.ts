import {
  TOGGLE_FORM_AUTH,
  RESET_POPUP,
  TOGGLE_POPUP_IMG,
  TOGGLE_CONFIRM_FORM,
  TOGGLE_CREATE_IMAGE_FORM,
  ActionsDispatch,
} from "../types/popup"

interface IInitState {
  authForm: boolean
  popupImg: boolean
  confirmForm: boolean
  createImgForm: boolean
}

const initState: IInitState = {
  authForm: false,
  popupImg: false,
  confirmForm: false,
  createImgForm: false,
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
    case TOGGLE_CONFIRM_FORM:
      return {
        ...state,
        confirmForm: !state.confirmForm,
      }
    case TOGGLE_CREATE_IMAGE_FORM:
      return {
        ...state,
        createImgForm: !state.createImgForm,
      }
    case RESET_POPUP:
      return {
        confirmForm: false,
        authForm: false,
        popupImg: false,
        createImgForm: false,
      }

    default:
      return state
  }
}

export default popupReducer
