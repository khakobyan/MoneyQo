import { 
    IS_LOGGED,
    LOGIN_HAS_ERROR,
    LOGIN_IS_LOADING,
    LOGIN,
    LOGOUT
} from '../../utils/constants/actionTypes';

const initialState = {
    isLogged: false,
    hasError: false,
    isLoading: false,
    logoutIsLoading: false,
    name: '',
    username: '',
    password: ''
};

export default (state = initialState, action) => {
    switch (action.type) {
        case IS_LOGGED:
            return {
                ...state,
                isLogged: action.isLogged
            }
        case LOGIN_HAS_ERROR:
            console.log(action, 'errrororrororo')
            return {
                ...state,
                isLogged: action.hasError
            };
        case LOGIN_IS_LOADING:
            return {
                 ...state,
                 isLoading: action.isLoading
            };
        default:
            return state;
    }
}