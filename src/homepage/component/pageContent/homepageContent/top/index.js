import React, { useState } from 'react';
import { Card } from 'antd';
import { withRouter } from 'react-router-dom';
import moment from 'moment';
moment.locale('zh-cn');
const Top = ({blockData,history}) => {
  let calMath = 0;
  if(blockData){
    for(let i=0;i<blockData.length;i+=1){
      for(let j=0;j<blockData[i].blockBody.instructions.length;j+=1){
        calMath++
      }
    }
  }

return(
    <Card 
      style={{ width: '100%' }}
    >
      <Card style={{ width: '240px',display:'inline-block',margin:'0 12px',borderLeft:'4px solid #5b389f' }} bodyStyle={{padding:10}}>
             <div>
              <p style={{fontWeight: 600}}>监管节点</p>  
              <p>2</p>  
            </div>
      </Card>
      <Card style={{ width: '240px',display:'inline-block',margin:'0 12px',borderLeft:'4px solid #5b389f' }} bodyStyle={{padding:10 }} >
      <div>
              <p style={{fontWeight: 600}}>合约</p>  
              <p>4</p>  
            </div>
             </Card>
             <Card style={{ width: '240px',display:'inline-block',margin:'0 12px',borderLeft:'4px solid #5b389f' }} bodyStyle={{padding:10 }} >
             <div>
              <p style={{fontWeight: 600}}>区块高度</p>  
              <p>{blockData?blockData.length:0}</p>  
            </div>
             </Card>
             <Card style={{ width: '240px',display:'inline-block',margin:'0 12px',borderLeft:'4px solid #5b389f' }} bodyStyle={{padding:10 }}>
             <div>
              <p style={{fontWeight: 600}}>交易总量</p>  
              <p>{calMath}</p>  
            </div>
             </Card>
    </Card>
)
};

export default withRouter(Top);
