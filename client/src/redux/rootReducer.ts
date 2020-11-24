import { combineReducers } from "redux"
import auth from "./reducers/auth"
import popup from "./reducers/popup"
import images from "./reducers/images"

const rootReducer = combineReducers({
  auth,
  popup,
  images,
})

export default rootReducer
