export const TOGGLE_FORM_AUTH = "TOGGLE_FORM_AUTH"
export const RESET_POPUP = "RESET_POPUP"

interface toggleFormAuth {
  type: typeof TOGGLE_FORM_AUTH
}

interface resetPopup {
  type: typeof RESET_POPUP
}

export type ActionsDispatch = toggleFormAuth | resetPopup
