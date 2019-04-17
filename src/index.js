import React from 'react';
import ReactDOM from 'react-dom';
import ROOT from './root';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import { store } from './store';

ReactDOM.render(
    <Provider store={store}>
        <HashRouter>
            <ROOT />
        </HashRouter>
    </Provider>
    ,
    document.getElementById('root'),
);
