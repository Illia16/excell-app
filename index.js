const { app, BrowserWindow } = require("electron");
const path = require("path");
const onReload = require('electron-reload');

app.on("ready", () => {
  const mainWindow = new BrowserWindow();
  mainWindow.loadFile(path.join(__dirname, "public/index.html"));
  mainWindow.webContents.openDevTools();
});

onReload(__dirname);