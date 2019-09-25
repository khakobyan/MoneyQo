import { combineReducers } from "redux";
import Login from "./auth/login";
import Customers from './customers/customers';
import User from './user/user'

/*
 * Responsible for combining all reducers inside of app
 */
export default combineReducers({
    login: Login,
    customers: Customers,
    user: User
})