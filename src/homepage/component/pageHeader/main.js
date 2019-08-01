import { Icon } from 'antd';
import React from 'react';
import { createStructuredSelector } from 'reselect';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getMenuCollapsed } from '../../redux/selectors';
import actions from '../../redux/actions';
import css from './main.less';
class pageHeader extends React.Component {
  constructor(props) {
    super(props);
  }
  // js的类中正常不允许使用箭头函数，通常为了绑定this对象需要在constructor中使用bind函数进行绑定，为了简化操作流程，使用@babel/plugin-proposal-class-properties插件进行解决
  toggle = () => {
    this.props.toggleCollapsed();
  }
  render() {
    return (
      // 使用局部的css 必须使用编译后的css类名 可以使用console.log(css)来查看都导出了什么类名
      <div className={css.mainClass}>
        <Icon
          className={css.trigger}
          type={this.props.getMenuCollapsed ? 'menu-unfold' : 'menu-fold'}
          onClick={() => { this.toggle(); }}
        />
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  getMenuCollapsed,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  toggleCollapsed: actions.toggleCollapsed,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(pageHeader);
