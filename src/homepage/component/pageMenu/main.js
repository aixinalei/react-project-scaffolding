import React from 'react';
import { Menu, Icon } from 'antd';
import { createStructuredSelector } from 'reselect';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getMenuCollapsed } from '../../redux/selectors';
import css from './main.less';
// 使用withRouter 为组件提供history location match staticContext属性
import { withRouter } from 'react-router-dom';

class pageMenu extends React.Component {
    constructor(props) {
        super(props);
        console.log(props)
    }
    changeRouter = (option) => {
        const { key } = option;
        this.props.history.replace(`/homepage/${key}`);
    }
    render() {
        return (
            <div className={css.mainClass}>
                <div className={css.logo} />
                <Menu
                    defaultSelectedKeys={['1']}
                    inlineCollapsed={this.props.getMenuCollapsed}
                    mode="inline"
                    theme="dark"
                    onSelect={(option) => { this.changeRouter(option) }}
                >
                    <Menu.Item key="1">
                        <Icon type="appstore" />
                        <span>项目集成</span>
                    </Menu.Item>
                    <Menu.Item key="installAndRun">
                        <Icon type="rocket" />
                        <span>安装与启动</span>
                    </Menu.Item>
                    <Menu.Item key="3">
                        <Icon type="read" />
                        <span>简易教程</span>
                    </Menu.Item>
                    <Menu.Item key="4">
                        <Icon type="star" />
                        <span>UI模板</span>
                    </Menu.Item>
                </Menu>
            </div>
        )
    }
}

const mapStateToProps = createStructuredSelector({
    getMenuCollapsed,
});

const mapDispatchToProps = dispatch => bindActionCreators({

}, dispatch);
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(pageMenu));