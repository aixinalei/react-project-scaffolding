const { app } = require('electron');
const path = require('path');
const argv = require('yargs').argv;

const { createWindow } = require('./nodeSrc/createWindow');
// 使用map进行窗口管理
const windowMap = new Map();

// 全局共享变量
global.shareData = {
  windowMap,
  argv,
};

// app打开时创建首页
app.on('ready', () => {
  const mainWindow = createWindow({
    width: 790,
    height: 724,
    webPreferences: {
      nodeIntegration: true,
    },
    title: 'react-electron项目脚手架',
  }, path.join(__dirname, 'dist/index.html'));
  // 将主窗口放入windowMap中管理
  windowMap.set('main', mainWindow);
  // 检查更新
  require('./nodeSrc/checkUpdate');
});

// 所有的窗口关闭时 关闭app
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});


// 批量注册ipcMain监听
require('./nodeSrc/ipcMainManager');
