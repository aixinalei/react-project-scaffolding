/**
 * Redux store 对象
 */

import { applyMiddleware, combineReducers, createStore } from 'redux';
import { createLogger } from 'redux-logger';

// redux-promise作为redux的异步解决方案，既允许action Creator返回一个Promise对象。
import promise from 'redux-promise';
import homepage from './homepage/index';

/**
 * 报告错误
 * @function
 */
const showError = () => next => (action) => {
  if (action.error) {
    if (console && console.warn) {
      console.warn('action error:', action);
    }
    return false;
  }
  const result = next(action);
  return result;
};

const middlewares = [
  showError,
  promise,
];
// TODO 暂时无用
if (process.env.NODE_ENV !== 'production') {
  middlewares.push(createLogger());
}
const createStoreWithMiddleware =
  applyMiddleware(...middlewares)(createStore);

const reducer = combineReducers({
  [homepage.constants.NAME]: homepage.reducer,
});
/**
 * 应用store 对象
 */
export const store = createStoreWithMiddleware(reducer, {});
