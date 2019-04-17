import * as t from './actions-type';
import produce from 'immer';
const initState = {

};

// state一定要有一个默认值
export default (state = initState, action) =>
    produce(state, (draft) => {
        switch (action.type) {

        }
        return draft
    })