import React from 'react';
import css from './helloword.css'
class HelloWorld extends React.Component {
    render() {
        console.log(css);
        return (
            <span >
                <span >Hello world</span>
            </span>
        )
    }
}

export default HelloWorld;