const { app, BrowserWindow } = require('electron');
const excelModule = require('./index');

function createWindow () {
    const win = new BrowserWindow({
      width: 800,
      height: 600
    })

    win.loadFile('index.html')
}

excelModule.init();

app.whenReady().then(() => {
    createWindow();
})