import loadable from '@loadable/component';
const homepage = loadable(() => import('./homepage'));
// 懒加载组件防止首页过大加载时间慢
export default homepage;
