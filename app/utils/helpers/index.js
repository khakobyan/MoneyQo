import {NavigationActions, StackActions} from "react-navigation";
import { api } from '../../services/Api';
import {VALIDATE_TOKEN} from '../constants/endPoints';

export const resetNavigation = (navigation, route) => {
    const resetAction = StackActions.reset({
        index: 0,
        actions: [NavigationActions.navigate({routeName: route})],
    });
    navigation.dispatch(resetAction);
};

export const setAxiosHeader = (token) => {
    console.log(token);
    api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    webApi.defaults.headers.common['Authorization'] = `Bearer ${token}`;
};


export const removeAxiosHeader = () => {
    api.defaults.headers.common['Authorization'] = null;
    webApi.defaults.headers.common['Authorization'] = null;
};

export const validateToken = () => {
    //remember GET or POST
    return api.get(VALIDATE_TOKEN);
};