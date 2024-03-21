import {$api} from "./index";

export const pay = async (data) =>
    (await $api.post('pay', data)).data