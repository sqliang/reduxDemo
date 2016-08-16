/**
 * combineReducers 可以将多个reducer组合成一个root reducer
 * 
 * 
 */

import { combineReducers } from 'redux';

import items from './home/items';
import filter from './home/filter';
import counter from './counterPage/counter';
import todosReducer from './todosPage/todosReducer';


const rootReducer = combineReducers({
    items,
    filter,
    counter,
    todos: todosReducer
});

export default rootReducer;