import axios, { AxiosInstance } from 'axios';
import { API_ADDRESS } from './constant';

const apiClient: AxiosInstance = axios.create({
    baseURL: API_ADDRESS,
    timeout: 500000,
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
    },
});

export default apiClient;