import { Modal, Progress } from 'antd';
import React from 'react';
const { ipcRenderer } = require('electron');
const confirm = Modal.confirm;
class UpdateProcessModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      downloadProgress: 0, // 下载进度
      dowloadProssessMode: false, // 下载进度模态框
    };
    ipcRenderer.on('downloadProgress', (e, args) => {
      // TODO: 下载进度最近不太好使 :https://github.com/electron-userland/electron-builder/issues/2521
      console.log('正在下载', args);
      const newpercent = parseInt(args.percent || 0, 10);
      this.setState({
        downloadProgress: newpercent,
      });
    });
    ipcRenderer.on('isUpdateNow', () => {
      this.setState({
        downloadProgress: 100,
      });
      // 1.2s后弹出模态框
      setTimeout(() => {
        confirm({
          title: '更新完成是否立即重启',
          okText: '立即重启',
          cancelText: '下次再说',
          width: 320,
          onOk() {
            ipcRenderer.send('isUpdateNow');
          },
          onCancel: () => {
            this.setState({
              dowloadProssessMode: false,
            });
          },
        });
      }, 1200);
    });
    ipcRenderer.on('checkForUpdateResult', (e, args) => {
      // 根据更新的结果提示用户下载 如果可以更新则弹出提示框询问是否需要更新
      console.log(args);
      if (args.cancellationToken) {
        confirm({
          title: '发现新版本是否更新',
          okText: '立即更新',
          cancelText: '下次再说',
          width: '320',
          onOk: () => {
            // 开发版本不检查更新
            ipcRenderer.send('downloadUpdate');
            // 弹出下载进度模态框
            this.setState({
              dowloadProssessMode: true,
            });
          },
          onCancel: () => {
            this.state.forbidAutoLogin = false;
          },
        });
      }
    });
    // 通知主进程 渲染进程加载完毕
    ipcRenderer.send('alreadyReady');
  }
  // 高阶函数
  render() {
    return (
      <Modal
        visible={this.state.dowloadProssessMode}
        closable={false}
        footer={[]}
      >
        {this.state.downloadProgress === 100 ? '下载完成' : '正在下载,请稍后'}
        <Progress percent={this.state.downloadProgress} status="active" />
      </Modal>
    );
  }
}

export default UpdateProcessModal;
