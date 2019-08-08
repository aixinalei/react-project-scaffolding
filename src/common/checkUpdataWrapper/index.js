// 检查系统更新 配合checkUpdate.js
// 高阶组件的范例
import React from 'react';
import UpdateProcessModal from './component/updateProcessModal';

const CheckUpadeWrapper = InnerComponent => class extends React.Component {

  render() {
    return (
      <div>
        <UpdateProcessModal />
        <InnerComponent
          {...this.props}
        />
      </div>
    );
  }
};

export default CheckUpadeWrapper;
