const fs = require("fs")
const SettingsManager = require("./SettingsManager.js")
const McServerConfig = require("./McServerConfig.js")
const DashboardServerComponent = require("./classes/DashboardServerComponent.js")
const JavaProcessManager = require("./JavaProcessManager.js");


async function getAllServerFolders() {
    const path = SettingsManager.getValueFromConfig("settings.serversFolderPath");
        
    const serverFolders = async () => (await fs.promises.readdir(path, { withFileTypes: true }))
        .filter(dirent => dirent.isDirectory())
        .map(dirent => dirent.name)
    
    return serverFolders()
}

function getAllServers() {
    return McServerConfig.getAllServers();
}



function getServer(name) {
    return McServerConfig.getServer(name);
}

async function setupServer(name, type, version) {
    const path = SettingsManager.getValueFromConfig("settings.serversFolderPath") + name;
    await fs.promises.mkdir(path, { recursive: true });
    const args = [path, type, version].join(" ");
    JavaProcessManager.sendCommand("setupServer", args);
    McServerConfig.addServer(new DashboardServerComponent(name, path, version, type));


}








module.exports = {
    getAllServerFolders,
    getServer,
    getAllServers,
    setupServer
}