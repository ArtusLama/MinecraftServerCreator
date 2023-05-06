const electron = require("electron");
const SettingsManager = require("./SettingsManager.js");
const MinecraftServers = require("./MinecraftServers.js");
const DashboardServerComponent = require("./classes/DashboardServerComponent.js");
const config = require('electron-json-config').factory(electron.app.getPath("userData") + "\\mc-servers.json");



module.exports.addServer = 
function addServer(server) {
    config.set("servers." + server.name, {
        path: server.path,
        version: server.mc_version,
        type: server.server_type
    });
}

module.exports.getServer = 
function getServer(name) {
    const serverData = config.get("servers." + name);
    return new DashboardServerComponent(name, serverData.path, serverData.version, serverData.type);
}

module.exports.getAllServers =
function getAllServers() {
    let serverList = [];
    config.keys("servers").forEach(server => serverList.push(this.getServer(server)))
    return serverList;
}

