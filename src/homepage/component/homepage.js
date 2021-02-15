import React from 'react';
// import css from './helloword.css'
import { Layout } from 'antd';
const {
  Header, Footer, Content,
} = Layout;
import HeaderComponet from './pageHeader';
import PageMenu from './pageMenu';
import PageContent from './pageContent';

const Homepage = () => (
  <Layout style={{ height: '100%' }}>
    <PageMenu />
    <Layout>
      <Header style={{ background: '#fff', padding: 0 }}>
        <HeaderComponet />
      </Header>
      <Content>
        <PageContent />
      </Content>
      <Footer>©2019 Create by DLjia</Footer>
    </Layout>
  </Layout>
);

export default Homepage;
