import { IImage } from "../../interfaces"

export const FETCH_START_IMAGES = "FETCH_START_IMAGES"
export const FETCH_SUCCESS_IMAGES = "FETCH_SUCCESS_IMAGES"
export const SET_NEW_IMAGE = "SET_NEW_IMAGE"
export const UPDATE_IMAGE = "UPDATE_IMAGE"
export const DELETE_IMAGE = "DELETE_IMAGE"

export interface fetchStartImages {
  type: typeof FETCH_START_IMAGES
}

export interface fetchSuccessImages {
  type: typeof FETCH_SUCCESS_IMAGES
  payload: IImage[]
}

export interface setNewImage {
  type: typeof SET_NEW_IMAGE
  payload: IImage
}

export interface updateImage {
  type: typeof UPDATE_IMAGE
  payload: IImage
}

export interface deleteImage {
  type: typeof DELETE_IMAGE
  payload: string
}

export type FetchActionsDispatch = fetchStartImages | fetchSuccessImages
export type ActionsDispatch =
  | FetchActionsDispatch
  | setNewImage
  | updateImage
  | deleteImage
