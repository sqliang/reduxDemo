import { combineReducers } from 'redux';

import items from './items';
import filter from './filter';

const rootReducer = combineReducers({
    filter,
    items
});
export default rootReducer;