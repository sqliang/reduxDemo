import * as types from '../../constants/homeActionTypes'

export function addItem() {
    return dispatch => {
        setTimeout(() => dispatch({type: types.ADD_ITEM}),300);
    }
}

export function deleteItem(item) {
    return {
        type: types.DELETE_ITEM,
        item
    }
}

export function deleteAll() {
    return {
        type: types.DELETE_ALL
    }
}

export function filterItem(e) {
    let filterItem = e.target.value;

    return {
        type: types.FILTER_ITEM,
        filterItem
    }
}