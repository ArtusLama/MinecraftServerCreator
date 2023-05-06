const { ipcMain } = require('electron');
const SettingsManager = require("./SettingsManager.js")
const McServers = require("./MinecraftServers.js")



ipcMain.handle("getValueFromConfig", async (event, path) => {
  console.log("[ipcMain] requested value from config -> " + path + " => " + SettingsManager.getValueFromConfig(path));
  return SettingsManager.getValueFromConfig(path);
})
ipcMain.handle("getAllServersForDashboard", async () => {
  return await McServers.getAllServers();
})
ipcMain.on("setupServerAtPath", (event, name, type, version) => {
  McServers.setupServer(name, type, version)
})