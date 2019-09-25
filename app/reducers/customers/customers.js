import {
    SET_CUSTOMERS,
    SET_CUSTOMERS_LOADING,
} from '../../utils/constants/actionTypes';

const INITIAL_STATE = {
    customers: [],
    loading: false
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SET_CUSTOMERS:
            return {
                customers: action.payload.customers
            };
        case SET_CUSTOMERS_LOADING:
            return {
                ...state,
                loading: action.payload
            };
        default:
            return state;
    }
};