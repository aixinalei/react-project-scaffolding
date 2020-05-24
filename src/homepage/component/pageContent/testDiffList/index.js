import React from 'react';
import Child1 from './child1';
import Child2 from './child2';
class TestDiff extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            refresh:Math.random(),
            testList:[1,2,3]
        }
    }
    render() {
        console.log('父组件渲染')
        return (
            <div>
                <button onClick={()=>{
                let newList = JSON.parse(JSON.stringify(this.state.testList))
                newList.push(Math.random())
                this.setState({
                    refresh:Math.random(),
                    testList:newList
                })}}>重新渲染组件</button>
                {
                    this.state.testList.map((i)=>{
                        return (
                            <Child1 key={i}/>
                        )
                    })
                }
                 {
                    this.state.testList.map((i)=>{
                        return (
                            <Child2 />
                        )
                    })
                }
            </div>
        );
    }
}

export default TestDiff;
