const { app, BrowserWindow } = require('electron');

const SettingsManager = require("./utils/SettingsManager.js")





const createWindow = () => {
  const win = new BrowserWindow({
    width: 1000,
    height: 800,

    minWidth: 900,
    minHeight: 650,

    autoHideMenuBar: true
  })


  SettingsManager.setupConfig(app.getAppPath())
  

  win.loadFile("electron/build/index.html")
}

app.whenReady().then(() => {
  createWindow()

  console.log(app.getAppPath());

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