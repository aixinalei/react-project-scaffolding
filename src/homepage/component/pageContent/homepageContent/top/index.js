import React, { useState,useEffect } from 'react';
import { Card,Icon,Divider,Progress } from 'antd';
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

  useEffect(() => {
    var echarts = require('echarts');

    const myChart = echarts.init(document.getElementById('jysl'));

    myChart.setOption({
  grid:{
    x:0,
    y:0,
    x2:0,
    y2:0
  },
  color: ['#3AA1FF'],
    title: {

    },
    tooltip: {},
    xAxis: {
      splitLine:{
        show:false     
     },
     show:false,
     splitArea : {show : false}
    },
    

    yAxis: {
      splitLine:{
        show:false     
     },
     show:false,
     splitArea : {show : false}
    },
    series: [{
        
        type: 'bar',
        data: [12, 12, 13, 14, 15, 10,12,10,9,10,11,12]
    },
   
  ]
});

const myChart0 = echarts.init(document.getElementById('qkzl'));

myChart0.setOption({
grid:{
  x:0,
  y:0,
  x2:0,
  y2:0
},
  color: ['#975FE4'],
    title: {

    },
    tooltip: {},
    xAxis: {
      show:false,
      splitLine:{
        show:false     
     }
    },
    

    yAxis: {
      show:false,
      splitLine:{
        show:false     
     }
    },
    series: [{
      symbol:'star',
      symbolSize: 0,
        type: 'line',
        data: [2, 2, 3, 4, 5, 5,5],
        smooth: true, 
          label: {
            normal: {
              show: true,
              position: 'top'
            }
          },
        areaStyle: {

          normal: {
  
              color: {
  
                  type: 'linear',
  
                  x: 0,
  
                  y: 0,
  
                  x2: 0,
  
                  y2: 1,
  
                  colorStops: [{
  
                      offset: 0, color: '#975FE4' // 0% 处的颜色
  
                  }, {
  
                      offset: 1, color: '#975FE4' 
  
                  }],
  
                  globalCoord: false 
                  
              },
    },
  }
}
  ]
});

  }, []);


return(
    <Card 
      style={{ width: '100%' }}
    >
      <Card style={{ width: '240px',height:'140px',display:'inline-block',margin:'0 12px' }} bodyStyle={{padding:10}}>
             <div>
                <div><span style={{color:'#919296',fontSize:'0.8em'}}>节点总量</span><Icon style={{float:"right"}} type="info-circle" /></div>
                <div style={{fontSize:'2em',marginBottom:'10px'}}>6个</div>
                <div style={{color:'#919296',fontSize:'0.8em',height:'20px'}}>监管节点<span style={{marginLeft:'6px'}}>2个</span><Icon style={{color:'red',marginLeft:'6px'}} type="caret-up" /><span style={{marginLeft:'6px'}}>计算节点</span><span style={{marginLeft:'6px'}}>4个</span><Icon style={{color:'#52C41A',marginLeft:'6px'}} type="caret-down" /></div>
                <Divider style={{marginTop:'10px',marginBottom:'10px'}}/>
                <div style={{color:'#919296',fontSize:'0.8em'}}>异常节点<span style={{marginLeft:'4px'}}>0个</span></div>
            </div>
      </Card>

      <Card style={{ width: '240px',height:'140px', display:'inline-block',margin:'0 12px' }} bodyStyle={{padding:10}}>
             <div>
                <div><span style={{color:'#919296',fontSize:'0.8em'}}>区块总量</span><Icon style={{float:"right"}} type="info-circle" /></div>
                <div style={{fontSize:'2em',marginBottom:'10px'}}>45块</div>
                <div id='qkzl' style={{width:'100%',height:'20px'}}></div>
                <Divider style={{marginTop:'10px',marginBottom:'10px'}}/>
                <div style={{color:'#919296',fontSize:'0.8em'}}>今日新增<span style={{marginLeft:'4px'}}>12块</span></div>
            </div>
      </Card>

      <Card style={{ width: '240px',height:'140px',display:'inline-block',margin:'0 12px' }} bodyStyle={{padding:10}}>
             <div>
                <div><span style={{color:'#919296',fontSize:'0.8em'}}>交易数量</span><Icon style={{float:"right"}} type="info-circle" /></div>
                <div style={{fontSize:'2em',marginBottom:'10px'}}>46笔</div>
                <div id='jysl' style={{width:'100%',height:'20px'}}></div>
                <Divider style={{marginTop:'10px',marginBottom:'10px'}}/>
                <div style={{color:'#919296',fontSize:'0.8em'}}>今日新增<span style={{marginLeft:'4px'}}>12笔</span></div>
            </div>
      </Card>

      <Card style={{ width: '240px',height:'140px',display:'inline-block',margin:'0 12px' }} bodyStyle={{padding:10}}>
             <div>
                <div><span style={{color:'#919296',fontSize:'0.8em'}}>智能合约</span><Icon style={{float:"right"}} type="info-circle" /></div>
                <div style={{fontSize:'2em',marginBottom:'10px'}}>4个</div>
                {/* <div id='qkzl' ></div> */}
                <Progress showInfo={false} strokeColor='#13C2C2' style={{width:'100%',height:'20px'}} percent={60} />
                <Divider  style={{marginTop:'10px',marginBottom:'10px'}}/>
                <div style={{color:'#919296',fontSize:'0.8em',}}>运行次数<span style={{marginRight:'4px',marginLeft:'4px'}}>225次</span><Icon style={{color:'red',marginLeft:'4px'}} type="caret-up" /><span style={{marginLeft:'6px'}}>停用合约</span><span style={{marginLeft:'4px'}}>2个</span><Icon style={{color:'#52C41A',marginLeft:'4px'}} type="caret-down" /></div>
            </div>
      </Card>

    </Card>
)
};

export default withRouter(Top);
