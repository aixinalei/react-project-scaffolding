import React from 'react';

class Child2 extends React.Component {
  componentWillUnmount() {
    console.log('非固定key值子组件卸载');
  }
  render() {
    console.log('非固定key值子组件2渲染');
    return (
      <div />
    );
  }
}

export default Child2;
