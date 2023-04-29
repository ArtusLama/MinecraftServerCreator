const fs = require("fs")
const SettingsManager = require("./SettingsManager.js")
const DashboardServerComponent = require("./classes/DashboardServerComponent.js")
const JavaProcessManager = require("./JavaProcessManager.js");


async function getAllServerFolders() {
    const path = SettingsManager.getValueFromConfig("settings.serversFolderPath");
    
    
    const serverFolders = async () => (await fs.promises.readdir(path, { withFileTypes: true }))
        .filter(dirent => dirent.isDirectory())
        .map(dirent => dirent.name)


    return serverFolders()
}

async function getAllServers() {
    const folders = await getAllServerFolders();
    return folders.map(folderName => getServer(folderName));
}



function getServer(name) {
    const path = SettingsManager.getValueFromConfig("settings.serversFolderPath") + name;
    return new DashboardServerComponent(name, path, "test", "test");
}

async function setupServer(name, type, version) {
    const path = SettingsManager.getValueFromConfig("settings.serversFolderPath") + name;
    await fs.promises.mkdir(path, { recursive: true });
    const args = [path, type, version].join(" ");
    JavaProcessManager.sendCommand("setupServer", args);


}








module.exports = {
    getAllServerFolders,
    getServer,
    getAllServers,
    setupServer
}