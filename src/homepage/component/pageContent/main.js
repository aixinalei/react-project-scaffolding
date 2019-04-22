import React from 'react';
import { Route, withRouter } from 'react-router-dom';
import installAndRun from './installAndRun/main';
import css from './main.less';
class pageHeader extends React.Component {
  render() {
    return (
      <div className={css.mainClass}>
        <Route path="/homepage/installAndRun" component={installAndRun} />
      </div>
    );
  }
}

export default withRouter(pageHeader);
