import { combineReducers } from "redux"
import auth from "./reducers/auth"
import popup from "./reducers/popup"

const rootReducer = combineReducers({
  auth,
  popup,
})

export default rootReducer
