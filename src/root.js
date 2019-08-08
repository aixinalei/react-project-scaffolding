import React from 'react';
import Homepage from './homepage/component/main';
import { Route, withRouter, Redirect } from 'react-router-dom';
import CheckUpadeWrapper from './common/checkUpdataWrapper';
class Root extends React.Component {
  // 根据不同的大功能模块集成进不同的组件
  render() {
    return (
      <div>
        <Route path="/homepage" component={Homepage} />
        <Redirect path="/" to="/homepage" />
      </div>
    );
  }
}

export default CheckUpadeWrapper(withRouter(Root));
