const { BrowserWindow } = require('electron');
const url = require('url');
function createWindow(browserWindowOption, windowPath) {
  let newWindow = new BrowserWindow(browserWindowOption);

  newWindow.loadURL(url.format({
    pathname: windowPath,
    protocol: 'file:',
    slashes: true,
  }));

  // 销毁window对象
  newWindow.on('closed', () => {
    newWindow = null;
  });
  // 开发模式打开控制台
  if (global.shareData.argv.production) {
    newWindow.webContents.openDevTools();
  }
  return newWindow;
}

module.exports = {
  createWindow,
};
