// 统一注册向主进程发送的信息 方便复用和管理 注意不要多次调用监听函数

const { ipcRenderer } = require('electron');
export function ipclistenDemo() {
  ipcRenderer.on('asynchronous-reply', (event, arg) => {
    // 通过redux 将主进程传进来的结果来产生对页面的改变
  });
}

export function ipcSendDemo(val) {
  ipcRenderer.send('asynchronous-message', val);
}

