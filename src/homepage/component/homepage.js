import React from 'react';
// import css from './helloword.css'
import { Layout, Button } from 'antd';
const {
  Header, Footer, Sider, Content,
} = Layout;
import HeaderComponet from './pageHeader/main';
import PageMenu from './pageMenu/main';
import PageContent from './pageContent/main';
import { createStructuredSelector } from 'reselect';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getMenuCollapsed } from '../redux/selectors';
import actions from '../redux/actions';
class Homepage extends React.Component {
  render() {
    return (
      <Layout style={{ height: '100%' }}>
        <Sider
          // collapsible
          collapsed={this.props.getMenuCollapsed}
        >
          <PageMenu />
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }}>
            <HeaderComponet />
          </Header>
          <Content>
            <PageContent />
          </Content>
          <Footer>©2019 Create by Censoft</Footer>
        </Layout>
      </Layout>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  getMenuCollapsed,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  toggleCollapsed: actions.toggleCollapsed,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Homepage);
