import React from 'react';
import ClassComponet from './classComponet';
import ReactHock from './reacthock';
import { Button } from 'antd';
class TestState extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showMode: 'none', // 'ClassComponet','ReactHock  '
    };
  }
  render() {
    return (
      <div>
        <Button
          onClick={() => {
            this.setState({
              showMode: 'none',
            });
          }}
        > 无加载</Button>
        <Button
          onClick={() => {
            this.setState({
              showMode: 'ClassComponet',
            });
          }}
        >类组件</Button>
        <Button
          onClick={() => {
            this.setState({
              showMode: 'ReactHock',
            });
          }}
        >ReactHock</Button>
        <h1>请阅读源代码及控制台 配合教程 理解setState</h1>
        {
                this.state.showMode === 'ClassComponet' && <ClassComponet />
            }
        {
                this.state.showMode === 'ReactHock' && <ReactHock />
            }

      </div>
    );
  }
}

export default TestState;
