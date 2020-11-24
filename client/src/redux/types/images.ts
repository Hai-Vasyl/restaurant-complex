import { IImage } from "../../interfaces"

export const FETCH_START_IMAGES = "FETCH_START_IMAGES"
export const FETCH_SUCCESS_IMAGES = "FETCH_SUCCESS_IMAGES"

export interface fetchStartImages {
  type: typeof FETCH_START_IMAGES
}

export interface fetchSuccessImages {
  type: typeof FETCH_SUCCESS_IMAGES
  payload: IImage[]
}

export type FetchActionsDispatch = fetchStartImages | fetchSuccessImages
export type ActionsDispatch = FetchActionsDispatch
