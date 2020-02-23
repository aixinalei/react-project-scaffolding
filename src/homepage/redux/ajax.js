import Config from '../../config';
import axios from 'axios';

// ajax样例：加载用户信息
export const loadData = () => new Promise((resolve) => {
  
  axios.get(`${Config.API_SERVER}/block/getAllBlock`).then((res) => {
    resolve(res);
  });
});
