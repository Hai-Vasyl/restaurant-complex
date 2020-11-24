import {
  FetchActionsDispatch,
  FETCH_START_IMAGES,
  FETCH_SUCCESS_IMAGES,
} from "../types/images"
import axios from "axios"
import { http } from "../../http"
import { Dispatch } from "redux"

export const fetchImages = (hrComplex: string) => async (
  dispatch: Dispatch<FetchActionsDispatch>
) => {
  try {
    dispatch({ type: FETCH_START_IMAGES })
    const res = await axios({
      url: `${http}/image/all`,
      method: "post",
      data: {
        hrComplex,
      },
    })
    dispatch({ type: FETCH_SUCCESS_IMAGES, payload: res.data })
  } catch (error) {}
}
