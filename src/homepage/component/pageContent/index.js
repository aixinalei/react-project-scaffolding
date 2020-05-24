import React from 'react';
import { Route, withRouter } from 'react-router-dom';
import installAndRun from './installAndRun';
import css from './index.less';
import projectIntegration from './projectIntegration';
import TestState from './testState';
import TestDiff from './testDiff';
class pageHeader extends React.Component {
  render() {
    return (
      <div className={css.mainClass}>
        <Route path="/homepage/installAndRun" component={installAndRun} />
        <Route path="/homepage/projectIntegration" component={projectIntegration} />
        <Route path="/homepage/testReactState" component={TestState} />
        <Route path="/homepage/testDiff" component={TestDiff} />
        
      </div>
    );
  }
}

export default withRouter(pageHeader);
