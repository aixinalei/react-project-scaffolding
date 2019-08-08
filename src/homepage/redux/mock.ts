import Mock from 'mockjs';
import Config from '../../config';

Mock.mock(
  `${Config.API_SERVER}/loadUserInfo`, {
    userId: 'dljia',
    name: 'dljia',
    dept: '产品开发部',
    post: '前端工程师',
  },
);
