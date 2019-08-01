import * as t from './actions-type';
import produce from 'immer';
import { MENU_COLLAPSED } from '../constants';
const initState = {
  menuCollapsed: MENU_COLLAPSED,
};

// state一定要有一个默认值
export default (state = initState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case t.TOGGLE_COLLAPSED: {
        draft.menuCollapsed = !draft.menuCollapsed;
        break;
      }
      case t.AJAX_ACTION_DEMO_LOAD_USERINFO: {
        console.log(action);
        break;
      }
      default: break;
    }
    return draft;
  });
