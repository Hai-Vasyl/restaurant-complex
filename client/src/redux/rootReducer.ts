import { combineReducers } from "redux"
import auth from "./reducers/auth"
import popup from "./reducers/popup"
import images from "./reducers/images"
import dates from "./reducers/dates"
import error from "./reducers/error"

const rootReducer = combineReducers({
  auth,
  popup,
  images,
  dates,
  error,
})

export default rootReducer
