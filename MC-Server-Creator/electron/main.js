const { app, BrowserWindow } = require('electron');
const SettingsManager = require("./utils/SettingsManager.js")
const JavaProcessManager = require("./utils/JavaProcessManager.js")
const IpcEvents = require("./utils/IpcEvents.js")
const path = require('path')


const  createWindow = () => {

  SettingsManager.setupConfig(app);
  JavaProcessManager.startJavaProcess();

  

  var win = new BrowserWindow({
    width: 900,
    height: 650,

    minWidth: 900,
    minHeight: 650,

    autoHideMenuBar: true,
    webPreferences: {
      preload: path.join(__dirname, "preload.js")
    }
  })

  win.loadFile("electron/build/index.html")
}









app.whenReady().then(() => {
  createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})
app.on('before-quit', () => {
  JavaProcessManager.quit();
})
