import React from 'react';
import Homepage from './homepage/component/main';
import { Route, withRouter, Redirect } from 'react-router-dom';
class Root extends React.Component {
  // 根据不同的大功能模块集成进不同的组件
  render() {
    return (
      <div>
        <Route path="/homepage" component={Homepage} />
        <Redirect path="/" exact to="/homepage" />
        {/* <Redirect path="/" to="/404页面" /> */}
      </div>
    );
  }
}

export default withRouter(Root);
