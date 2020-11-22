export const FETCH_START_AUTH = "FETCH_START_AUTH"
export const FETCH_SUCCESS_AUTH = "FETCH_SUCCESS_AUTH"
export const FETCH_ERROR_AUTH = "FETCH_ERROR_AUTH"
export const RESET_ERRORS_AUTH = "RESET_ERRORS_AUTH"
export const RESET_ERROR_AUTH = "RESET_ERROR_AUTH"
export const SET_AUTH = "SET_AUTH"

export interface IUser {
  ava: string
  firstname: string
  lastname: string
  phone: string
  bio: string
  birth: string
  role: string
  _id: string
  username: string
  email: string
  password: string
  date: string
}

export interface IAuthError {
  value?: string
  msg: string
  param: string
  location?: string
}

export interface IAuthSuccess {
  token: string
  user: IUser
}

export interface fetchStartAuth {
  type: typeof FETCH_START_AUTH
}

export interface fetchSuccessAuth {
  type: typeof FETCH_SUCCESS_AUTH
  payload: IAuthSuccess
}

export interface fetchErrorAuth {
  type: typeof FETCH_ERROR_AUTH
  payload: IAuthError[]
}

export interface resetErrorsAuth {
  type: typeof RESET_ERRORS_AUTH
}

export interface resetErrorAuth {
  type: typeof RESET_ERROR_AUTH
  payload: string
}

export interface setAuth {
  type: typeof SET_AUTH
}

export type FetchActionsDispatch =
  | fetchStartAuth
  | fetchSuccessAuth
  | fetchErrorAuth
export type ActionsDispatch =
  | FetchActionsDispatch
  | resetErrorsAuth
  | resetErrorAuth
  | setAuth
