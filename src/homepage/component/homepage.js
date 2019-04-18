import React from 'react';
// import css from './helloword.css'
import { Layout, Button } from 'antd';
const {
    Header, Footer, Sider, Content,
} = Layout;
import HeaderComponet from './pageHeader/main.js';
import PageMenu from './pageMenu/main.js';

class HelloWorld extends React.Component {
    render() {
        return (
            <Layout>
                <Sider>
                    <PageMenu></PageMenu>
                </Sider>
                <Layout>
                    <Header>
                        <HeaderComponet />
                    </Header>
                    <Content>
                        <Button type="primary">Primary</Button>
                    </Content>
                    <Footer>Footer</Footer>
                </Layout>
            </Layout>
        )
    }
}

export default HelloWorld;