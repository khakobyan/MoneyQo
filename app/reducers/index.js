import { combineReducers } from "redux";
import Login from "./auth/login";

/*
 * Responsible for combining all reducers inside of app
 */
export default combineReducers({
    login: Login,
})