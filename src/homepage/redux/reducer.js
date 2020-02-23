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
      case t.LOAD_DATA:{
        //根据返回结果 去掉非空字段
        let data = [];
        let oldData = action.payload.data.data.filter(n=>!!n).sort(function compareNumbers(a, b) {
          return b.blockHeader.number - a.blockHeader.number ;
        })
        for(let i=0;i<oldData.length;i+=1){
          let tempIndex = data.find(n=>n.blockHeader.number === oldData[i].blockHeader.number)
          if(!tempIndex){
            data.push(oldData[i])
          }
        }
        draft.data = data
        break;
      }
      default: break;
    }
    return draft;
  });
