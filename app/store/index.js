import reducer from '../reducers'
import thunk from "redux-thunk";
import {createStore, applyMiddleware} from "redux";

/** Responsible for creating app store connected to Redux, thunk as a middleware for handling api calls
 */
export const store = createStore(reducer, applyMiddleware(thunk));