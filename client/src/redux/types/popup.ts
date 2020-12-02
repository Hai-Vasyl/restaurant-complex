import { IImage } from "../../interfaces"

export const TOGGLE_FORM_AUTH = "TOGGLE_FORM_AUTH"
export const TOGGLE_POPUP_IMG = "TOGGLE_POPUP_IMG"
export const TOGGLE_CONFIRM_FORM = "TOGGLE_CONFIRM_FORM"
export const TOGGLE_CREATE_IMAGE_FORM = "TOGGLE_CREATE_IMAGE_FORM"
export const TOGGLE_EDIT_IMAGE_FORM = "TOGGLE_EDIT_IMAGE_FORM"
export const RESET_POPUP = "RESET_POPUP"

interface toggleFormAuth {
  type: typeof TOGGLE_FORM_AUTH
}

interface togglePopupImg {
  type: typeof TOGGLE_POPUP_IMG
}

interface toggleConfirmForm {
  type: typeof TOGGLE_CONFIRM_FORM
}

interface createImagePopup {
  type: typeof TOGGLE_CREATE_IMAGE_FORM
}

interface resetPopup {
  type: typeof RESET_POPUP
}
interface editImagePopup {
  type: typeof TOGGLE_EDIT_IMAGE_FORM
  payload: IImage
}

export type ActionsDispatch =
  | toggleFormAuth
  | resetPopup
  | togglePopupImg
  | toggleConfirmForm
  | createImagePopup
  | editImagePopup
