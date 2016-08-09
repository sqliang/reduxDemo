/**
 * combineReducers 可以将多个reducer组合成一个root reducer
 * 
 * 
 */

import { combineReducers } from 'redux';

import items from './items';
import filter from './filter';

const rootReducer = combineReducers({
    items,
    filter
});
export default rootReducer;