const { autoUpdater } = require('electron-updater');
const { ipcMain } = require('electron');
// 检测更新，在你想要检查更新的时候执行，renderer事件触发后的操作自行编写
function updateHandle() {
  autoUpdater.autoDownload = false;
  // 更新下载进度事件（如果文件下载太快或者文件直接就在本地则不会出现此事件）
  autoUpdater.on('download-progress', (progressObj) => {
    // 向子进程发送消息 告知进度
    global.shareData.windowMap.get('main').webContents.send('downloadProgress', JSON.stringify(progressObj));
  });
  autoUpdater.on('update-downloaded', (event, releaseNotes, releaseName, releaseDate, updateUrl, quitAndUpdate) => {
    ipcMain.on('isUpdateNow', (e, arg) => {
      autoUpdater.quitAndInstall();
    });
    global.shareData.windowMap.get('main').webContents.send('isUpdateNow');
  });
  // 执行自动更新检查
  autoUpdater.checkForUpdates().then((res) => {
    global.shareData.windowMap.get('main').webContents.send('checkForUpdateResult', res);
  });
  // 更新新版本
  ipcMain.on('downloadUpdate', () => {
    autoUpdater.downloadUpdate();
  });
}
if (!global.shareData.argv.production) {
  // 非开发模式下检查软件更新
  ipcMain.on('alreadyReady', (event, arg) => {
    // 执行检查
    updateHandle();
  });
}
