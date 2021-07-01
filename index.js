const { app, BrowserWindow } = require('electron')
const path = require('path')
require('electron-reload')(__dirname, {
  electron: path.join(__dirname, 'node_modules', '.bin', 'electron.cmd') // windows用electron.cmd
});
function createWindow () {
    const win = new BrowserWindow({
      width: 600,
      height: 400,
      webPreferences: {
        preload: path.join(__dirname, 'preload.js')
      }
    })
    
    // win.setResizable(false) // reside
    // win.maximizable = false // 放大縮小按鈕不能按
    // win.minimizable = false // 右上角的 - 不見，就是不能變最小（背景）
    // win.closable = false // 關閉按鈕不能按
    // win.menuBarVisible = false; // F12或是 FILE EDIT 會不見 
    win.setMaximumSize(600, 500);
    win.setMinimumSize(400, 300);
    win.loadFile('index.html')
}

app.whenReady().then(() => {
  createWindow()

  app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})