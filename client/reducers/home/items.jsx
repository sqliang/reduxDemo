/**
 * 
 */
import Immutable from 'immutable';
import * as types from '../../constants/homeActionTypes';

const initialItems = Immutable.List([1,2,3]);

export default function items(state = initialItems, action) {
    switch (action.type){
        case types.ADD_ITEM:
            return state.push(state.size !== 0 ? state.get(-1) + 1: 1);
        case types.DELETE_ITEM:
            return state.delete(state.indexOf(action.item));
        case types.DELETE_ALL:
            return state.clear();
        default:
            return state;
    }
}