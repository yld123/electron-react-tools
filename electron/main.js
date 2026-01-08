
const { app, BrowserWindow, ipcMain, Menu } = require('electron');
// const { updateElectronApp } = require('update-electron-app');
// updateElectronApp();// 自动检查更新
const path = require('node:path');

let win = null;
const createWindow = () => {
  win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
  })
  Menu.setApplicationMenu(null)
  win.setMenu(null)
  win.loadFile('./index.html')
}

app.whenReady().then(() => {
  createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })
})

// Register IPC handlers
ipcMain.handle('ping', () => 'pong')

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})