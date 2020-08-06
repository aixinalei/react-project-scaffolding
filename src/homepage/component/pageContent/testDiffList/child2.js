import React from 'react';

class Child2 extends React.Component {
  constructor(props) {
    super(props);
    console.log('非固定key值子组件装载');
  }
  componentWillUnmount() {
    console.log('非固定key值子组件卸载');
  }
  render() {
    console.log('非固定key值子组件2渲染');
    return (
      <div>Child2</div>
    );
  }
}

export default Child2;
