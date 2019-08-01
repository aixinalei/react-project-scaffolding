import { API_SERVER } from '../../config';
import axios from 'axios';

// ajax样例：加载用户信息
export const loadUserInfo = () => new Promise((resolve) => {
  axios.post(`${API_SERVER}/loadUserInfo`).then((res) => {
    resolve(res);
  });
});
