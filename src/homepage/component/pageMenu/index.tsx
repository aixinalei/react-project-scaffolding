import React from 'react';
import { Menu, Icon } from 'antd';
import { createStructuredSelector } from 'reselect';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getMenuCollapsed } from '../../redux/selectors';
// 使用withRouter 为组件提供history location match staticContext属性
import { withRouter } from 'react-router-dom';

class pageMenu extends React.Component {
  constructor(props) {
    super(props);
  }
  changeRouter = (option) => {
    const { key } = option;
    this.props.history.replace(`/homepage/${key}`);
  }
  render() {
    return (
      <div >
        <div style={{ height: '60px' }}>
          <h1
            style={{
              fontWeight: 600,
              fontSize: 20,
              color: 'white',
            }}
          >公司Logo</h1>
        </div>
        <Menu
          inlineCollapsed={this.props.getMenuCollapsed}
          mode="inline"
          theme="dark"
          onSelect={(option) => { this.changeRouter(option); }}
        >
          <Menu.Item key="projectIntegration">
            <Icon type="appstore" />
            <span>项目集成</span>
          </Menu.Item>
          <Menu.Item key="installAndRun">
            <Icon type="rocket" />
            <span>安装与启动</span>
          </Menu.Item>
        </Menu>
      </div >
    );
  }
}

const mapStateToProps = createStructuredSelector({
  getMenuCollapsed,
});

const mapDispatchToProps = dispatch => bindActionCreators({

}, dispatch);
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(pageMenu));
