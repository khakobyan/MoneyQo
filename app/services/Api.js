import axios from 'axios'
import {BASE_URL} from './Env';

const axiosApiConfig = {
    baseURL: `${BASE_URL}`,
    timeout: 30000,
};

export const api = axios.create(axiosApiConfig);