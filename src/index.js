import React from 'react';
import ReactDOM from 'react-dom';
import ROOT from './root';
import { Provider } from 'react-redux';
// 使用hashRouter 当页面url变化时不会向后台发送请求如果使用browserRouter需要后台配合
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
