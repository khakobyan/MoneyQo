import { combineReducers } from "redux";
import Login from "./auth/login";
import Customers from './customers/customers'

/*
 * Responsible for combining all reducers inside of app
 */
export default combineReducers({
    login: Login,
    customers: Customers
})