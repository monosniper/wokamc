import {$api} from "./index";

export const getLastBuys = async () =>
    (await $api.get('buys?limit=10&sort=["createdAt","DESC"]&isCompleted=true')).data