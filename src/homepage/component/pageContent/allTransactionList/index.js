import React from 'react';
import css from './index.less';
import { Card,Pagination } from 'antd';
import { createStructuredSelector } from 'reselect';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { getData } from '../../../redux/selectors';
import moment from 'moment';
moment.locale('zh-cn');
class AllTransactionList extends React.Component {
  constructor(props){
    super(props)
    this.state ={
      currentPage:1,
    }
  }
  render() {
    const blockData= this.props.getData;
    let data = [];
    if(blockData){
      for(let i=0;i<blockData.length;i+=1){
        blockData[i].blockBody.instructions.map((j)=>{
          j.parentNumbers=blockData[i].blockHeader.number
          j.parentHash=blockData[i].hash
        })
        data = data.concat(blockData[i].blockBody.instructions);
       
      }
    }
    return (

 <Card className={css.mainClass} title="交易" style={{ width: '100%'}}>
          {data.map((i)=>{
            console.log(i)
            return (
              <Card bodyStyle={{padding:0,height:100 }} key={i.hash} style={{marginBottom:15}}>
                <div 
                style={{
                  float:'left',
                  width:100,
                  textAlign:'center',
                  height:100,
                  lineHeight:'100px',
                  backgroundColor: 'rgba(71,134,255,.1)',
                  borderBottom: '1px solid #4786ff',
                  borderRight: '1px solid #4786ff',
                  borderTop: '1px solid #4786ff',
                  borderLeft:'4px solid #4786ff',
                  color:'#4786ff',
                }}>交易</div>
                <div style={{display:'inline-block',padding:10}}>
                  <p style={{color:'#5c35c0',cursor:'pointer'}} onClick={()=>{
                    this.props.history.replace(`/homepage/transaction/${i.hash}`);
                  }}>{i.hash}</p>
                  <p>{i.publicKey}</p>
                  <p>{moment(new Date(i.timeStamp)).format('MMMM Do YYYY, h:mm:ss')}</p>
                </div>
                <div style={{
                     float:'right',
                     height:100,
                     textAlign:'right',
                     padding:15
                }}>
                  <p style={{color:'#5c35c0',cursor:'pointer'}} onClick={()=>{
                     this.props.history.replace(`/homepage/block/${i.parentHash}`);
                  }}>区块&nbsp;#{i.parentNumbers}</p>
                  <p>{moment(new Date(i.timeStamp)).fromNow()}</p>
                </div>
              </Card>
            )
          })}
      </Card>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  getData,
});

const mapDispatchToProps = dispatch => bindActionCreators({

}, dispatch);

export default  withRouter(connect(mapStateToProps, mapDispatchToProps)(AllTransactionList));
