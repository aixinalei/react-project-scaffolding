import React from 'react';
import Homepage from './homepage/component/main';
import { Route, withRouter, Switch } from 'react-router-dom';
class Root extends React.Component {
  // 根据不同的大功能模块集成进不同的组件
  render() {
    console.log(1);
    return (
      <div>
        <Switch>
          <Route path="/homepage" component={Homepage} exact />
        </Switch>

      </div>
    );
  }
}

export default withRouter(Root);
