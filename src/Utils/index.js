import humps from 'humps';
import randomize from 'randomatic';
import { createAction } from 'redux-actions';
/**
 * @function
 * 获取一个随机的8位id
 */
export const hash8 = () => randomize('Aa0', 8);
/**
 * @function
 * 获取一个随机的16位id
 */
export const hash16 = () => randomize('Aa0', 16);

/**
 * @function
 * 统一action
 */
export function getActionsFromType(actionTypes) {
  const types = humps.camelizeKeys(
    actionTypes,
    {
      separator: '_',
      process(key, convert) {
        return convert(key.toLowerCase());
      },
    },
  );

  const actions = {};

  for (const key in types) {
    actions[key] = createAction(
      types[key],
      params => params,
    );
  }

  actions.createError = createAction(
    'ERROR_REPORT',
    params => params,
  );
  return actions;
}
