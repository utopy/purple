import { app, BrowserWindow, ipcMain } from 'electron'

const RedditApi = require('reddit-oauth');
let reddit = new RedditApi({
    app_id: 'O6i2xiHdmo_ZXA',
    app_secret: 'hzAu0NJUD6VIsRzTLUTTewOBQVs',
    redirect_uri: 'your_app_redirect_uri'
});


/**
 * Set `__static` path to static files in production
 * https://simulatedgreg.gitbooks.io/electron-vue/content/en/using-static-assets.html
 */
if (process.env.NODE_ENV !== 'development') {
  global.__static = require('path').join(__dirname, '/static').replace(/\\/g, '\\\\')
}

let mainWindow
const winURL = process.env.NODE_ENV === 'development'
  ? `http://localhost:9080`
  : `file://${__dirname}/index.html`

function createWindow () {
  /**
   * Initial window options
   */
  mainWindow = new BrowserWindow({
    height: 600,
    useContentSize: true,
    width: 800,
    titleBarStyle: "hidden"
  })

  mainWindow.loadURL(winURL)

  mainWindow.on('closed', () => {
    mainWindow = null
  })
}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow()
  }
})

ipcMain.on("openLogin",(e)=>{
  console.log("porcoDIOOOO")
})
