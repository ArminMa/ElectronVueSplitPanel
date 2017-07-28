'use strict';

import { app, BrowserWindow } from 'electron';

/**
 * Set `__static` path to static files in production
 * https://simulatedgreg.gitbooks.io/electron-vue/content/en/using-static-assets.html
 */
if (process.env.NODE_ENV !== 'development') {
  global.__static = require('path').join(__dirname, '/static').replace(/\\/g, '\\\\');
}

let mainWindow;
const winURL = process.env.NODE_ENV === 'development'
  ? `http://localhost:9080`
  : `file://${__dirname}/index.html`;

function createWindow () {
  /**
   * Initial window options
   */
  mainWindow = new BrowserWindow({
    // Boolean - The kiosk mode. Default is `false`.
    kiosk: false,

    // String - Default window title. Default is `'Electron'`.
    title: 'My Electron Split Desktop test',
    // height: 563,
    // width: 1000,
    useContentSize: true,
    // Integer - Window's left offset from screen. Default is to center the window.
    // x: 200,
    // Integer - Window's top offset from screen. Default is to center the window.
    // y: 200,
    // Boolean - Show window in the center of the screen.
    center: true,
    webPreferences: {
      overlayScrollbars: false
    }
  });

  mainWindow.loadURL(winURL);

  mainWindow.on('closed', () => {
    mainWindow = null;
  });
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow();
  }
});
