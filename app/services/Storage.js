import AsyncStorage from '@react-native-community/async-storage';

export default class Storage {
    static getToken = () => {
        return AsyncStorage.getItem('token');
    };

    static setToken = (token) => {
        return AsyncStorage.setItem('token', token);
    };

    static removeToken = () => {
        return AsyncStorage.removeItem('token');
    };
}