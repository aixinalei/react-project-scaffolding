import * as t from './actions-type';
import * as a from './ajax';
import { createAction } from 'redux-actions';

// 工具函数 节省模板性代码
import { getActionsFromType } from '../../Utils/util';
const actions = getActionsFromType(t);

actions.ajaxActionDemoLoadUserInfo = createAction(
  t.AJAX_ACTION_DEMO_LOAD_USERINFO,
  a.loadUserInfo,
);
export default actions;
