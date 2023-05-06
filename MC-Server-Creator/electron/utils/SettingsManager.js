const config = require('electron-json-config').factory();
const fs = require("fs");
const path = require("path")





function setValueInConfig(path, value) {
    config.set(path, value);
}


module.exports.setupConfig = 
function setupConfig(app) {
    if (config.get("setDefaultConfig") || config.get("setDefaultConfig") == null) {
        setValueInConfig("setDefaultConfig", false)
        setValueInConfig("java.jarPath", path.resolve(__dirname, "..\\..\\java\\McServerCreatorJava.jar"));

        const serversForlderPath = app.getPath("home") + "\\mc-server-creator\\servers\\";
        setValueInConfig("settings.serversFolderPath", serversForlderPath)
        if (!fs.existsSync(serversForlderPath)){
            fs.mkdirSync(serversForlderPath, { recursive: true });
        }
    }
}
module.exports.getValueFromConfig = 
function getValueFromConfig(path) {
    return config.get(path)
}








