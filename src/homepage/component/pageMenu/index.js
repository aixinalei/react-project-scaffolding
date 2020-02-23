import React from 'react';
import { Menu, Icon } from 'antd';
import { createStructuredSelector } from 'reselect';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getMenuCollapsed } from '../../redux/selectors';
// 使用withRouter 为组件提供history location match staticContext属性
import { withRouter } from 'react-router-dom';

class pageMenu extends React.Component {
  constructor(props) {
    super(props);
  }
  changeRouter = (option) => {
    const { key } = option;
    this.props.history.replace(`/homepage/${key}`);
  }
  render() {
    return (
      <div >
        <div style={{ height: '60px',
         display: 'inline-block', 
         float: 'left',
         background:`url(${require('./cenblock_w.png')}) center no-repeat` , 
         backgroundSize:'50%',
         width: 258,
         cursor:'pointer' }} 
        onClick={()=>{this.props.history.replace(`/homepage/index`);}}
        >
        </div>
        <div style={{display:'inline-block',color:'white'}}>
        <div style={{display:'inline-block',cursor:'pointer',fontSize:'18px',margin:'0 10px'}}
         onClick={()=>{
             this.props.history.replace(`/homepage/index`);
          }}><Icon type="appstore" />首页</div>
          <div style={{display:'inline-block',cursor:'pointer',fontSize:'18px',margin:'0 10px'}} onClick={()=>{
             this.props.history.replace(`/homepage/allBlockList`);
          }}><Icon type="appstore" />区块</div>
          <div
          style={{display:'inline-block',cursor:'pointer',fontSize:'18px',margin:'0 10px'}}
           onClick={()=>{
            this.props.history.replace(`/homepage/allTransactionList`);
         }}
          ><Icon type="money-collect" />交易</div>
        </div>
        <div style={{ height: '64px', display: 'inline-block', float: 'right' }} />
      </div >
    );
  }
}

const mapStateToProps = createStructuredSelector({
  getMenuCollapsed,
});

const mapDispatchToProps = dispatch => bindActionCreators({

}, dispatch);
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(pageMenu));
