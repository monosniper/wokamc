import {$api} from "./index";

export const getPunishments = async () =>
    (await $api.get('punishments')).data