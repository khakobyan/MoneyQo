import { api } from '../../services/Api';
import { LOGIN } from '../../utils/constants/endPoints';
import {
    setAxiosHeader, 
    resetNavigation,
    validateToken, 
    removeAxiosHeader
} from '../../utils/helpers';
import Storage from '../../services/Storage';
import { 
    IS_LOGGED, 
    LOGIN_HAS_ERROR, 
    LOGIN_IS_LOADING,
    LOGOUT
} from '../../utils/constants/actionTypes';

export const isLogged = (bool) => {
    return {
        type: IS_LOGGED,
        isLogged: bool
    }
};

export const loginHasError = (bool) => {
    return {
        type: LOGIN_HAS_ERROR,
        hasError: bool
    }
};

export const loginIsLoading = (bool) => {
    return {
        type: LOGIN_IS_LOADING,
        isLoading: bool
    }
};

export const login = (username, password, navigation = null) => (dispatch) => {
    dispatch(loginIsLoading(true));
    if (!username || !password) {
        dispatch(loginHasError(true));
        dispatch(loginIsLoading(false));
        return;
    }
    api.post(LOGIN, {username, password})
        .then(result => {
            if (result) {
                console.log(result, 'login Result')
                dispatch(loginHasError(false));
                dispatch(isLogged(true));
                const {token} = result.data;
                Storage.setToken(token)
                    .then(() => {
                        setAxiosHeader(token);
                        validateToken()
                        .then(() => {
                            // dispatch(setUser(response.data.user));
                            if(navigation){
                                resetNavigation(navigation, 'Initial');
                            }
                            dispatch(loginIsLoading(false));
                        })
                        .catch((e) => {
                            // setUser({});
                            removeAxiosHeader();
                            resetNavigation(navigation, 'Login');
                        });
                    });
            }
        })
        .catch((e) => {
            console.log(e, 'error');
            dispatch(loginHasError(true));
        });
};

export const logout = (navigation = null) => (dispatch) => {
    resetNavigation(navigation, 'Login') 
    Storage.removeToken();

    return {
        type: LOGOUT
    }
};

export default {
    isLogged,
    loginHasError,
    loginIsLoading,
    login,
    logout
}
