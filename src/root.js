import React from 'react';
import HelloWorld from './homepage/component/helloWold';
import { Route, withRouter } from 'react-router-dom';
class Root extends React.Component {
    // 此处是可以根据需要添加不同的
    render() {
        return (
            <div>
                <Route path='/homepage' component={HelloWorld} />
            </div>
        )
    }
}

export default withRouter(Root);