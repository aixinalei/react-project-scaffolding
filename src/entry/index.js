import React from 'react';
import ReactDOM from 'react-dom';
import Root from '../homepage';
// 使用hashRouter 当页面url变化时不会向后台发送请求如果使用browserRouter需要后台配合
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
    <Root />
  </BrowserRouter>

  ,
  document.getElementById('root'),
);
