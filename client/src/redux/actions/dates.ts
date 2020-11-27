import {
  FetchActionsDispatch,
  FETCH_START_DATES,
  FETCH_SUCCESS_DATES,
} from "../types/dates"
import { Dispatch } from "redux"
import axios from "axios"
import { http } from "../../http"

export const fetchDates = (hrComplex: string) => async (
  dispatch: Dispatch<FetchActionsDispatch>
) => {
  try {
    dispatch({ type: FETCH_START_DATES })
    const res = await axios({
      url: `${http}/daterange/all`,
      method: "post",
      data: {
        hrComplex,
      },
    })
    dispatch({ type: FETCH_SUCCESS_DATES, payload: res.data })
  } catch (error) {}
}
