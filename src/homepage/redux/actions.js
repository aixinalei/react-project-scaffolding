import * as t from './actions-type';
import * as a from './ajax';
import { createAction } from 'redux-actions';

// 工具函数 节省模板性代码
import { getActionsFromType } from '../../Utils/util';
const actions = getActionsFromType(t);

actions.loadData = createAction(
  t.LOAD_DATA,
  a.loadData,
);

export default actions;
