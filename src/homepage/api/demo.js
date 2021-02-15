import axios from 'axios';

// ajax样例：加载用户信息
export default {
  loadUserInfo: () => new Promise((resolve) => {
    axios.post('/api/loadUserInfo').then((res) => {
      resolve(res);
    });
  }),
};
