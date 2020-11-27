import { IDateRange } from "../../interfaces"

export const FETCH_START_DATES = "FETCH_START_DATES"
export const FETCH_SUCCESS_DATES = "FETCH_SUCCESS_DATES"
export const CREATE_NEW_DATE = "CREATE_NEW_DATES"
export const DELETE_DATE = "DELETE_DATE"
export const UPDATE_DATE = "UPDATE_DATE"

interface fetchStartDates {
  type: typeof FETCH_START_DATES
}

interface createNewDate {
  type: typeof CREATE_NEW_DATE
  payload: IDateRange
}

interface deleteDate {
  type: typeof DELETE_DATE
  payload: string
}

interface fetchSuccessDates {
  type: typeof FETCH_SUCCESS_DATES
  payload: IDateRange[]
}

interface updateDates {
  type: typeof UPDATE_DATE
  payload: IDateRange[]
}

export type FetchActionsDispatch = fetchStartDates | fetchSuccessDates
export type ActionsDispatch =
  | FetchActionsDispatch
  | createNewDate
  | deleteDate
  | updateDates
