import Mock from 'mockjs';
import { API_SERVER } from '../../config';
Mock.mock(
  `${API_SERVER}/loadUserInfo`, {
    userId: 'dljia',
    name: 'dljia',
    dept: '产品开发部',
    post: '前端工程师',
  },
);
