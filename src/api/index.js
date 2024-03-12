import axios from 'axios';

export const API_URL = 'http://localhost:8080';
// export const API_URL = 'http://193.164.16.150:5000';

export const $api = axios.create({
    withCredentials: false,
    baseURL: API_URL + '/api/'
})

export const $server = axios.create({
    withCredentials: false,
    baseURL: API_URL
})