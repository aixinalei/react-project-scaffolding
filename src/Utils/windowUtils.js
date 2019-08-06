const { remote } = require('electron');
export const WindowUtil = {
  // 获取项目路径
  getAppPath: () => remote.app.getAppPath(),

  // 获取窗口大小
  getSize: () => remote.getCurrentWebContents().getSize(),
  // 窗口最小化
  minWindow: () => {
    remote.getCurrentWindow().minimize();
  },
  //  如果窗口已经最大化 则取消最大化 否则最大化窗口
  maxWindow: () => {
    const browserWindow = remote.getCurrentWindow();
    const isMaxed = browserWindow.isMaximizable();
    if (!isMaxed) {
      browserWindow.unmaximize();
    } else {
      browserWindow.maximize();
    }
  },
  // 设置窗口是否能改变大小，参数true/false
  setResizable: (resizable) => {
    remote.getCurrentWindow().setResizable(resizable);
  },
  // 下载文件
  download: (url) => {
    remote.getCurrentWebContents().downloadURL(url);
  },
  // 隐藏窗口
  hide: () => {
    const browserWindow = remote.getCurrentWindow();
    browserWindow.hide();
  },
  // 显示窗口
  show: () => {
    const browserWindow = remote.getCurrentWindow();
    browserWindow.show();
  },
  // 窗口闪烁
  flashFrame: () => {
    const browserWindow = remote.getCurrentWindow();
    if (!browserWindow.isFocused()) {
      browserWindow.showInactive();
      browserWindow.flashFrame(true);
    }
  },
  // 设置窗口最前端显示
  setAlwaysOnTop: (top) => {
    const browserWindow = remote.getCurrentWindow();
    browserWindow.setAlwaysOnTop(top);
  },
};
