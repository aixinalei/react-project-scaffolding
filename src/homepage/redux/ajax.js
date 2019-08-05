import Config from '../../config';
import axios from 'axios';

// ajax样例：加载用户信息
export const loadUserInfo = () => new Promise((resolve) => {
  axios.post(`${Config.API_SERVER}/loadUserInfo`).then((res) => {
    resolve(res);
  });
});
