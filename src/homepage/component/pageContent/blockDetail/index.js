import React from 'react';
import css from './index.less';
import { Card, Row, Col } from 'antd';
import { createStructuredSelector } from 'reselect';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getData } from '../../../redux/selectors';
import { withRouter } from 'react-router-dom';
import moment from 'moment';
moment.locale('zh-cn');
class BlockDetail extends React.Component {
  constructor(props){
    super(props)
    this.state ={
      currentPage:1,
    }
  }
  render() {
    const blockDatas= this.props.getData;
    let data = blockDatas.find(n=>n.hash === this.props.match.params.BlockId);
    return (
      <div className={css.mainClass}>
        <Row>
        <Col span={18} style={{paddingRight:40}}>
          <Card
            title={(
              <div>
                <h2>区块详情 </h2>
                <div style={{height:90,padding:'20px 0'}}>
                  <p style={{fontWeight:600,marginBottom:10}}>区块高度:{data.blockHeader.number}</p>
                  <p>
                    <span style={{display:'inline-block'}}>{moment(new Date(data.blockHeader.timeStamp)).format('MMMM Do YYYY, h:mm:ss')}</span>
                    <span style={{display:'inline-block',marginLeft:10}}>{data.blockBody.instructions.length}交易</span>
                  </p>
                </div>
              </div>
            )}
            bodyStyle={{height:'209px'}}
          >
          <div>
            <div style={{height:40}}>
              <div style={{float:'left'}}>区块哈希</div>
              <div style={{textAlign:'center',  
              overflow: 'hidden',
              textOverflow: 'ellipsis',
             whiteSpace: 'nowrap',}}>{data.hash}</div>
            </div>
            <div style={{height:40}}>
              <div style={{float:'left'}}>前块哈希</div>
              <div style={{textAlign:'center',  
              overflow: 'hidden',
              textOverflow: 'ellipsis',
             whiteSpace: 'nowrap',}}>{data.blockHeader.hashPreviousBlock}</div>
            </div>
            <div style={{height:40}}>
              <div style={{float:'left'}}>状态树根</div>
              <div style={{textAlign:'center',  
              overflow: 'hidden',
              textOverflow: 'ellipsis',
             whiteSpace: 'nowrap',}}>{data.blockHeader.hashMerkleRoot}</div>
            </div>
            <div style={{height:40}}>
              <div style={{float:'left'}}>版本信息</div>
              <div style={{textAlign:'center',  
              overflow: 'hidden',
              textOverflow: 'ellipsis',
             whiteSpace: 'nowrap',}}>{data.blockHeader.version}</div>
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
            title="交易"
          >
            {data.blockBody.instructions.map((i)=>{
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
                     padding:15,
                     textAlign:'right'
                }}>
                  <p style={{color:'#5c35c0',cursor:'pointer'}}>区块&nbsp;#{i.parentNumbers}</p>
                  <p>{moment(new Date(i.timeStamp)).fromNow()}</p>
                </div>
              </Card>
            )
          })}
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(BlockDetail));
