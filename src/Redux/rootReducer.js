import { combineReducers } from "redux";
import authReducer from "./authSlice.js";

const rootReducer = combineReducers({
  auth: authReducer,
});

export default rootReducer;
