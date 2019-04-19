import * as t from './actions-type';
import { createAction } from 'redux-actions';

// 工具函数 节省模板性代码
import { getActionsFromType } from '../../util';
const actions = getActionsFromType(t);
export default actions;
