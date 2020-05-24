import React from 'react';

class Child1 extends React.Component {
    componentWillUnmount() {
        console.log('固定key值子组件卸载')
    }
    render() {
        console.log('固定key值子组件1渲染')
        return (
            <div></div>
        );
    }
}

export default Child1;
