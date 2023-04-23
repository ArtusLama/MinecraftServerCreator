
const configFilePath = "../resources/config.json";
const config = require(configFilePath);
const fs = require("fs");


const deep_value = (obj, path) => path
    .replace(/\[|\]\.?/g, '.')
    .split('.')
    .filter(s => s)
    .reduce((acc, val) => acc && acc[val], obj);


function setValueInConfig(path, value) {
    console.log(config)
    deep_value(config, path) = value

    config = fs.readFileSync(configFilePath, "utf8");

    fs.writeFile(configFilePath, JSON.stringify(config, null, 4), function writeJSON(err) {
        if (err) return console.log(err);
    });
}


module.exports.setupConfig = 
function setupConfig(path) {
    setValueInConfig()
}









