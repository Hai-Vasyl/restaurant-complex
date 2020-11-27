import {
  ActionsDispatch,
  FETCH_START_DATES,
  FETCH_SUCCESS_DATES,
  CREATE_NEW_DATE,
  DELETE_DATE,
  UPDATE_DATE,
} from "../types/dates"
import { IDateRange } from "../../interfaces"

interface IInitState {
  loading: boolean
  dates: IDateRange[]
}

const initState: IInitState = {
  loading: false,
  dates: [],
}

const datesReducer = (state = initState, action: ActionsDispatch) => {
  switch (action.type) {
    case FETCH_START_DATES:
      return {
        ...state,
        loading: true,
      }
    case FETCH_SUCCESS_DATES:
      return {
        loading: false,
        dates: action.payload,
      }
    case CREATE_NEW_DATE:
      return {
        ...state,
        dates: [...state.dates, action.payload],
      }
    case DELETE_DATE:
      return {
        ...state,
        dates: state.dates.filter((date) => date._id !== action.payload),
      }
    case UPDATE_DATE:
      return {
        ...state,
        dates: action.payload,
      }
    default:
      return state
  }
}

export default datesReducer
