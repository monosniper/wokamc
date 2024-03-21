import {$api} from "./index";

export const getTags = async () =>
    (await $api.get('tags')).data