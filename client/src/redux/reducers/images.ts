import {
  FETCH_SUCCESS_IMAGES,
  FETCH_START_IMAGES,
  ActionsDispatch,
} from "../types/images"
import { IImage } from "../../interfaces"

interface IInitState {
  loading: boolean
  images: IImage[]
}

const initState: IInitState = {
  loading: false,
  images: [],
}

const imageReducer = (state = initState, action: ActionsDispatch) => {
  switch (action.type) {
    case FETCH_START_IMAGES:
      return {
        ...state,
        loading: true,
      }
    case FETCH_SUCCESS_IMAGES:
      return {
        loading: false,
        images: action.payload,
      }
    default:
      return state
  }
}

export default imageReducer
