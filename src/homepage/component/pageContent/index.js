import React from 'react';
import { Route, withRouter,Redirect } from 'react-router-dom';

import css from './index.less';
import HomepageContent from './homepageContent';
import AllBlockList from './allBlockList';
import AllTransactionList from './allTransactionList';
import BlockDetail from './blockDetail';
import TransactionDetail from './transactionDetail';
class pageHeader extends React.Component {
  render() {
    return (
      <div className={css.mainClass}>
        <Route path="/homepage/index" component={HomepageContent} />
        <Route path="/homepage/allBlockList" component={AllBlockList} />
        <Route path="/homepage/allTransactionList" component={AllTransactionList} />
        <Route path="/homepage/block/:BlockId" component={BlockDetail} />
        <Route path="/homepage/transaction/:transactionId" component={TransactionDetail} />
        {/* <Route path="/homepage/allTransactionList" component={AllTransactionList} /> */}
        <Redirect path="/" exact to="/homepage/index" />
   
      </div>
    );
  }
}

export default withRouter(pageHeader);
