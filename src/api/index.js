import axios from 'axios';
import {pay} from "./pay";
import {getProducts} from "./getProducts";
import {getLastBuys} from "./getLastBuys";
import {getPunishments} from "./getPunishments";
import {getTags} from "./getTags";
import {getOnline} from "./getOnline";

export const API_URL = process.env.REACT_APP_API_URL;

export const $api = axios.create({
    withCredentials: false,
    baseURL: API_URL + '/api/'
})

export {
    pay,
    getProducts,
    getLastBuys,
    getPunishments,
    getTags,
    getOnline,
}