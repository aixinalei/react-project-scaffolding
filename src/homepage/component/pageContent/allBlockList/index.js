import React from 'react';
import css from './index.less';
import { Card,Pagination } from 'antd';
import { createStructuredSelector } from 'reselect';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getData } from '../../../redux/selectors';
import moment from 'moment';
moment.locale('zh-cn');
import { withRouter } from 'react-router-dom';
class AllBlockList extends React.Component {
  constructor(props){
    super(props)
    this.state ={
      currentPage:1,
    }
  }
  render() {
    const blockData= this.props.getData;
    return (

          <Card title="区块" style={{ width: '100%' }} className={css.mainClass}>
          {blockData && blockData.map((i)=>{ 
            console.log(i)
        {/* {blockData && blockData.slice((this.state.currentPage-1)*10,this.state.currentPage*10).map((i)=>{ */}
          return (
            <Card  bodyStyle={{padding:0,height:100 }} key={i.hash} style={{marginBottom:15}}>
              <div 
                style={{
                  float:'left',
                  width:100,
                  textAlign:'center',
                  height:100,
                  lineHeight:'100px',
                  backgroundColor: 'rgba(71,134,255,.1)',
                  borderBottom: '1px solid #5b389f',
                  borderRight: '1px solid #5b389f',
                  borderTop: '1px solid #5b389f',
                  borderLeft:'4px solid #5b389f',
                  color:'#4786ff',
                }}>区块</div>
                <div style={{display:'inline-block',padding:10}}>
                  <p style={{color:'#5c35c0',cursor:'pointer'}} onClick={()=>{
                     this.props.history.replace(`/homepage/block/${i.hash}`);
                  }}>#{i.blockHeader.number}</p>
                  <p><span>{i.blockBody.instructions.length}交易</span></p>
                  <p><span>区块哈希&nbsp;</span><span style={{color:'#1890ff',cursor:'pointer'}} onClick={()=>{
                     this.props.history.replace(`/homepage/block/${i.hash}`);
                  }}>{i.hash}</span></p>
                </div>
                <div style={{
                     float:'right',
                     height:100,
                     textAlign:'right',
                     padding:15
                }}>
   
                  <p>{moment(new Date(i.blockHeader.timeStamp)).format('MMMM Do YYYY, h:mm:ss')}</p>
                </div>
            </Card>
          )
        })}
        {/* <div>
          <Pagination onChange={(page)=>{this.setState({currentPage:page})}} defaultCurrent={1} total={blockData?blockData.length:0} />
        </div> */}
       
    </Card>

    );
  }
}

const mapStateToProps = createStructuredSelector({
  getData,
});

const mapDispatchToProps = dispatch => bindActionCreators({

}, dispatch);

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AllBlockList));
