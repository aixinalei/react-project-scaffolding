import React from 'react';
class ClassComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 1
        }
    }
    componentDidMount() {
        console.log('类组件state初始值', this.state.count)
        this.setState({count: 2})
        console.log('类组件第一个state', this.state.count)
        setTimeout(() => {
            console.log('类组件第二个state',this.state.count);
            this.setState({count: 3})
            console.log('类组件第三个state',this.state.count);
            this.setState({count: 4})
            console.log('类组件第四个state',this.state.count);
        }, 0)
        setTimeout(() => {
            console.log('类组件第五个state',this.state.count);
            this.setState({count: 5})
            console.log('类组件第六个state',this.state.count);
            this.setState({count: 6})
            console.log('类组件第七个state',this.state.count);
        }, 0)
        this.setState({count: 7})
        console.log('类组件第八个setState', this.state.count)
    }
    render() {
        console.log('类组件渲染')
        return (
          <div>
            <div>
                类组件最终显示结果 {
                this.state.count
            } </div>
            <div>源码</div>
            <div>
                {
                    `
                    constructor(props) {
                        super(props);
                        this.state = {
                            count: 1
                        }
                    }
                    componentDidMount() {
                        console.log('类组件state初始值', this.state.count)
                        this.setState({count: 2})
                        console.log('类组件第一个state', this.state.count)
                        setTimeout(() => {
                            console.log('类组件第二个state',this.state.count);
                            this.setState({count: 3})
                            console.log('类组件第三个state',this.state.count);
                            this.setState({count: 4})
                            console.log('类组件第四个state',this.state.count);
                        }, 0)
                        setTimeout(() => {
                            console.log('类组件第五个state',this.state.count);
                            this.setState({count: 5})
                            console.log('类组件第六个state',this.state.count);
                            this.setState({count: 6})
                            console.log('类组件第七个state',this.state.count);
                        }, 0)
                        this.setState({count: 7})
                        console.log('类组件第八个setState', this.state.count)
                    }
                    `
                }
            </div>
            <div>最终结果</div>
            <div>
                类组件渲染<br/>
                类组件state初始值 1<br/>
                类组件第一个state 1<br/>
                类组件第八个setState 1<br/>
                类组件渲染<br/>
                类组件第二个state 7<br/>
                类组件渲染<br/>
                类组件第三个state 3<br/>
                类组件渲染<br/>
                类组件第四个state 4<br/>
                类组件第五个state 4<br/>
                类组件渲染<br/>
                类组件第六个state 5<br/>
                类组件渲染<br/>
                类组件第七个state 6<br/>
            </div>
            </div>
         
        );
    }
}

export default ClassComponent;
