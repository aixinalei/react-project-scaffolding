import React, { useState,useEffect } from 'react';
import { Card } from 'antd';
import { withRouter } from 'react-router-dom';
import moment from 'moment';
import css from './index.less'
moment.locale('zh-cn');
const TransactionList  = ({blockData,history}) => {
  let data = [];
  if(blockData){
    for(let i=0;i<blockData.length;i+=1){
      blockData[i].blockBody.instructions.map((j)=>{
        j.parentNumbers=blockData[i].blockHeader.number
        j.parentHash=blockData[i].hash
      })
      data = data.concat(blockData[i].blockBody.instructions);
      if(data.length>=5) break
    }
  }
  return(
      <Card className={css.mainClass} title="交易" extra={<a href="javascript:;"  onClick={()=>{
        history.replace(`/homepage/allTransactionList`);
      }}>查看所有交易</a>}  style={{ width: '100%'}}>
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
                     history.replace(`/homepage/transaction/${i.hash}`);
                  }}>{i.hash}</p>
                  <p>{i.publicKey}</p>
                  <p>{moment(new Date(i.timeStamp)).format('MMMM Do YYYY, h:mm:ss a')}</p>
                </div>
                <div style={{
                     float:'right',
                     height:100,
                     textAlign:'right',
                     padding:15
                }}>
                  <p style={{color:'#5c35c0',cursor:'pointer'}} onClick={()=>{
                     history.replace(`/homepage/block/${i.parentHash}`);
                  }}>区块&nbsp;#{i.parentNumbers}</p>
                  <p>{moment(new Date(i.timeStamp)).fromNow()}</p>
                </div>
              </Card>
            )
          })}
      </Card>
  )
  };

export default withRouter(TransactionList);
