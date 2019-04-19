import { NAME } from '../constants';
import { createSelector } from 'reselect';
export const getAll = state => state[NAME];
export const getMenuCollapsed = createSelector(getAll, all => all.menuCollapsed);