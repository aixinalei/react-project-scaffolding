import React from 'react';
import css from './index.less';
import { Card, Row, Col } from 'antd';
import { createStructuredSelector } from 'reselect';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getData } from '../../../redux/selectors';
import moment from 'moment';
moment.locale('zh-cn');
import JSONTree from 'react-json-tree'
import { withRouter } from 'react-router-dom';

class TransactionDetail extends React.Component {
  constructor(props){
    super(props)
    this.state ={
      currentPage:1,
    }
  }

  render() {
    const blockDatas= this.props.getData;
    let dataList=[];
    if(blockDatas){
      for(let i=0;i<blockDatas.length;i+=1){
        blockDatas[i].blockBody.instructions.map((j)=>{
          j.parentNumbers=blockDatas[i].blockHeader.number
          j.parentHash=blockDatas[i].hash
        })
        dataList = dataList.concat(blockDatas[i].blockBody.instructions);
     
      }
    }
    let data = dataList.find(n=>n.hash === this.props.match.params.transactionId);
    console.log(typeof data.json)
    let showJSON = false;
    if(typeof data.json === 'string'){
      try{
        showJSON = JSON.parse(data.json);
        if(typeof showJSON.content === 'string'){
          try{
            showJSON.content = JSON.parse(showJSON.content)
          } catch(e){
            console.log(e)
            console.log('错误1')
          }
         
        }
      } catch(e){
        console.log('错误2')
      }
    }
    return (
      <div className={css.mainClass}>
        <Row>
        <Col span={18} style={{paddingRight:40}}>
          <Card
              title={(
                <div>
                  <h2>交易详情 </h2>
                  <div style={{height:90,padding:'20px 0'}}>
                   <p style={{fontWeight:600,marginBottom:10}}>{data.hash}</p>
                    <p>
                    <span style={{display:'inline-block'}}>交易</span>
                    <span style={{display:'inline-block',marginLeft:10}}>{moment(new Date(data.timeStamp)).format('MMMM Do YYYY, h:mm:ss')}</span>
                  </p>
                  </div>
                </div>
              )}
              bodyStyle={{height:'209px'}}
          >
          <div style={{}}>
          <div>
            <div style={{height:40}}>
            <div style={{float:'left'}}>区块高度</div>
            <div style={{
              color:'#5c35c0',
              cursor:'pointer',
              paddingLeft:20,
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap',}}
              onClick={()=>{
               this.props.history.replace(`/homepage/block/${data.parentHash}`);
              }}
              >#{data.parentNumbers}</div>
            </div>
           </div>
           <div>
            <div style={{height:40}}>
            <div style={{float:'left'}}>区块哈希</div>
            <div style={{
              paddingLeft:20,
                overflow: 'hidden',
                textOverflow: 'ellipsis',
              whiteSpace: 'nowrap',}}>{data.parentHash}</div>
            </div>
           </div>
           <div>
            <div style={{height:40}}>
            <div style={{float:'left'}}>操作类型</div>
            <div style={{
              paddingLeft:20,
                overflow: 'hidden',
                textOverflow: 'ellipsis',
              whiteSpace: 'nowrap',}}>{data.operation==1?'新增':(data.operation==-1?'删除':'修改')}</div>
            </div>
           </div>
           <div>
            <div style={{height:40}}>
            <div style={{float:'left'}}>发送序号</div>
            <div style={{
              paddingLeft:20,
                overflow: 'hidden',
                textOverflow: 'ellipsis',
              whiteSpace: 'nowrap',}}>{data.instructionId}</div>
            </div>
           </div>
          </div>
        </Card>
        </Col>
        <Col span={6}>
        <div style={{position:'relative',height:'180px',color:'white',backgroundColor:'#5b389f',padding:30,borderRadius:'10px'}}>
          <h2 style={{color:'white'}}>监管节点</h2>
          <h3 style={{
                position: 'absolute',
                color:'white',
                bottom: '10px',
                right: '30px',
          }}>西城区科信局</h3>
        </div>
        <div style={{position:'relative',height:'170px',backgroundColor:'white',padding:30,marginTop:30,borderRadius:'10px'}}>
          <h2 >计算节点</h2>
          <h3 style={{
                position: 'absolute',
                bottom: '10px',
                right: '30px',
          }}>中关计算节点</h3>
        </div>
        </Col>
      </Row>
      <Row style={{marginTop:40}}>
        <Card
          title="交易数据"
        >
        <div style={{marginBottom:20}}>
          <div style={{display:'inline-block',width:'150px'}}>上链数据（UTF-8）</div>
          <div style={{display:'inline-block',   
          width:'100%', 
          wordWrap: 'break-word',
    lineHeight: 'normal'}}>{data.json}</div>
        </div>
        {
            showJSON &&   <div>
          <div style={{display:'inline-block',width:'150px'}}>上链数据（格式化）</div>
          <JSONTree data={showJSON} />

        </div>  
      }
        </Card>
      </Row>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  getData,
});

const mapDispatchToProps = dispatch => bindActionCreators({

}, dispatch);

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TransactionDetail));
