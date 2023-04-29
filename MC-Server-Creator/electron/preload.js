const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld("ipc", {
    getValueFromConfig: (valuePath) => ipcRenderer.invoke("getValueFromConfig", valuePath),
    getAllServersForDashboard: () => ipcRenderer.invoke("getAllServersForDashboard"),
    setupServerAtPath: (name, type, version) => ipcRenderer.send("setupServerAtPath", name, type, version)
})