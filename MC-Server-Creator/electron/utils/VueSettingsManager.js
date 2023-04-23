
import config from "../resources/config.json"


const deep_value = (obj, path) => path
    .replace(/\[|\]\.?/g, '.')
    .split('.')
    .filter(s => s)
    .reduce((acc, val) => acc && acc[val], obj);


export function getSetting(path) {
    return deep_value(config, path)
}










