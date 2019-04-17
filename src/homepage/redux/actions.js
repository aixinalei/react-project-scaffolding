import * as t from './actions-type';
import { createAction } from 'redux-actions';

import { getActionsFromType } from '../../util';
const actions = getActionsFromType(t);
export default actions;
