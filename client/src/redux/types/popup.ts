export const TOGGLE_FORM_AUTH = "TOGGLE_FORM_AUTH"
export const TOGGLE_POPUP_IMG = "TOGGLE_POPUP_IMG"
export const RESET_POPUP = "RESET_POPUP"

interface toggleFormAuth {
  type: typeof TOGGLE_FORM_AUTH
}

interface togglePopupImg {
  type: typeof TOGGLE_POPUP_IMG
}

interface resetPopup {
  type: typeof RESET_POPUP
}

export type ActionsDispatch = toggleFormAuth | resetPopup | togglePopupImg
