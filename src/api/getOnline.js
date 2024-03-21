import {$api} from "./index";

export const getOnline = async () =>
    (await $api.get('history?limit=25')).data