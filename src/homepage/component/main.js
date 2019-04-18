import loadable from '@loadable/component';
const homepage = loadable(() => import('./homepage'));
// 懒加载组件
export default homepage 