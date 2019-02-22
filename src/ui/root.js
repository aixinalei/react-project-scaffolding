import React from 'react';
import HelloWorld from './helloWold';
class Root extends React.Component {
    render() {
        return (
            <div>
                <img src={require('./24827011.png')}></img>
                <HelloWorld />
                <p>
                    <span>author:<span>dljia</span></span>
                </p>

            </div>
        )
    }
}

export default Root;