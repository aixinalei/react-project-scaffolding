import React from 'react';
import Child1 from './child1';
import Child2 from './child2';
import Child3 from './child3';
class TestDiff extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            refresh:Math.random(),
        }
    }
    render() {
        console.log('父组件渲染')
        return (
            <div>
                <button onClick={()=>{this.setState({
                    refresh:Math.random()
                })}}>重新渲染组件</button>
                <Child1 key="1"/>
                <Child2 key={
                    Math.random()
                }/>
                <Child3 />
            </div>
        );
    }
}

export default TestDiff;
