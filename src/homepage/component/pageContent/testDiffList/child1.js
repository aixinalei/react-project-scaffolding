import React from 'react';

class Child1 extends React.Component {
  constructor(props) {
    super(props);
    console.log('固定key值子组件装载');
  }
  componentWillUnmount() {
    console.log('固定key值子组件卸载');
  }
  render() {
    console.log('固定key值子组件1渲染');
    return (
      <div>child1</div>
    );
  }
}

export default Child1;
