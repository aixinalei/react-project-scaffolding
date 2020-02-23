import React, { useState } from 'react';
import { Card } from 'antd';
import { withRouter } from 'react-router-dom';
import moment from 'moment';
moment.locale('zh-cn');
const BlockList = ({blockData,history}) => {

return(
    <Card title="区块" 
      extra={<a href="javascript:;" onClick={()=>{
        history.replace(`/homepage/allBlockList`);
      }}>查看所有区块</a>} 
      style={{ width: '100%' }}
    >
        {blockData && blockData.slice(0,4).map((i)=>{
          return (
            <Card style={{ width: '240px',display:'inline-block',margin:'0 12px',borderLeft:'4px solid #5b389f' }} bodyStyle={{padding:0,height:110 }} key={i.hash}>
              <div  style={{color:'#1890ff',height:46,lineHeight:'46px',paddingLeft:'20px',cursor:'pointer'}} onClick={()=>{ history.replace(`/homepage/block/${i.hash}`);}}>#{i.blockHeader.number}</div>
              <div  style={{paddingLeft:'20px',backgroundColor:'#f6f7f9',height:64,paddingTop:'10px'}}>
                <div ><span>{i.blockBody.instructions.length}&nbsp;&nbsp;交易&nbsp;&nbsp;</span><span>{moment(new Date(i.blockHeader.timeStamp)).fromNow()}</span></div>
                <div style={{
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      whiteSpace: 'nowrap',
                }}><span>区块哈希&nbsp;</span><span style={{color:'#1890ff',cursor:'pointer'}}  onClick={()=>{ history.replace(`/homepage/block/${i.hash}`);}}>{i.hash}</span></div>
              </div>
            </Card>
          )
        })}
    </Card>
)
};

export default withRouter(BlockList);
