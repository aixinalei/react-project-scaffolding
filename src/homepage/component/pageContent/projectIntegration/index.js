import React from 'react';
class projectIntegration extends React.Component {

  render() {
    return (
      <div>
        <h2>项目集成</h2>
        <ul>
          <li>核心库：webpack4+react16.7+reactRouter4+redux+antd</li>
          <li>使用redux-promise+axios进行异步操作</li>
          <li>集成less、css，使用模块化处理。同时将css文件单独抽离，进行缓存优化</li>
          <li>集成HappyPack优化webpack打包速度</li>
          <li>集成eslint检查</li>
          <li>集成Mockjs，拦截请求生成测试数据</li>
          <li>集成模块懒加载</li>
        </ul>
      </div>
    );
  }
}

export default projectIntegration;
