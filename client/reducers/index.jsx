/**
 * combineReducers 可以将多个reducer组合成一个root reducer
 * 
 * 
 */

import { combineReducers } from 'redux';

import items from './home/items';
import filter from './home/filter';
import counter from './counterPage/counter';

const rootReducer = combineReducers({
    items,
    filter,
    counter
});

export default rootReducer;