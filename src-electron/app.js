import { app, BrowserWindow } from "electron";
import { isDev } from './isDev.js';

app.on("ready", () => {
     const mainWindow = new BrowserWindow()
     if (isDev()) {
          mainWindow.loadURL("http://localhost:5173/")
     }
})