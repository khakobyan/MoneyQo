import {api} from '../../services/Api';
import {FETCH_CUSTOMERS} from '../../utils/constants/endPoints';
import {SET_CUSTOMERS, SET_CUSTOMERS_LOADING} from '../../utils/constants/actionTypes';

export const fetchCustomers = () => dispatch => {
    dispatch(setCustomersLoading(true));
    api.post(FETCH_CUSTOMERS)
        .then(response => {
            console.log(JSON.parse(response.data.Payload), 'customers')
            dispatch({
                type: SET_CUSTOMERS,
                payload: {
                    customers: JSON.parse(response.data.Payload)
                }
            });
            dispatch(setCustomersLoading(false));
        })
        .catch((e) => {
            console.log(e, '1324')
        })
}

export const setCustomersLoading = loading => {
    return {
        type: SET_CUSTOMERS_LOADING,
        payload: loading
    }
}