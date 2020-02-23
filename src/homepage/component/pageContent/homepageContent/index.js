import React from 'react';
import css from './index.less';
import BlockList from './blockList';
import TransactionList from './transactionList'
import { createStructuredSelector } from 'reselect';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getData } from '../../../redux/selectors';
import Top from './top';
class pageHeader extends React.Component {
  render() {
    return (
      <div className={css.mainClass}>
      <div style={{marginBottom:20}}>
        <Top blockData={this.props.getData}/>
      </div>
      <div style={{marginBottom:20}}>
        <BlockList blockData={this.props.getData}/>
      </div>
        <TransactionList blockData={this.props.getData}/>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  getData,
});

const mapDispatchToProps = dispatch => bindActionCreators({

}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(pageHeader);
