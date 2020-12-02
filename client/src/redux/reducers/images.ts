import {
  FETCH_SUCCESS_IMAGES,
  FETCH_START_IMAGES,
  SET_NEW_IMAGE,
  ActionsDispatch,
} from "../types/images"
import { IImage } from "../../interfaces"

interface IInitState {
  loading: boolean
  fetched: boolean
  images: IImage[]
}

const initState: IInitState = {
  loading: false,
  fetched: false,
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
        fetched: true,
      }
    case SET_NEW_IMAGE:
      return {
        ...state,
        images: [action.payload, ...state.images],
      }
    default:
      return state
  }
}

export default imageReducer
