import React from 'react';
// import css from './helloword.css'
import { Layout } from 'antd';
const {
  Header, Footer, Sider, Content,
} = Layout;
import HeaderComponet from './pageHeader';
import PageMenu from './pageMenu';
import PageContent from './pageContent';
import { createStructuredSelector } from 'reselect';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getData } from '../redux/selectors';
import actions from '../redux/actions';
class Homepage extends React.Component {
  constructor(props){
    super(props)
    // 初始化加载数据
    props.loadData()
  }
  render() {
    return (
      <Layout className="layout" style={{ height: '100%' }}>
        <Header>
          <PageMenu />
        </Header>
        <Content style={{ padding: '0 50px',overflowY: 'scroll' }}>
          <PageContent />
        </Content>
        <Footer style={{background:'#001529',textAlign:'center',color:'white'}}>© 2020 CenBlock Copyright  中关村科技软件股份有限公司</Footer>
      </Layout>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  getData,
});

const mapDispatchToProps = dispatch => bindActionCreators({
loadData:actions.loadData
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Homepage);
