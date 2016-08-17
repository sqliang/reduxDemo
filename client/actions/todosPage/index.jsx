import * as types from '../../constants/todosActionTypes';
import axios from 'axios';

function requestTodos() {
    return {
        type: types.REQ_TODOS
    };
}

function receiveTodos(json) {
    return {
        type: types.RECV_TODOS,
        data: json
    }
}

function receiveError(json) {
    return {
        type: types.RECV_ERROR,
        data: json
    }
}
export function fetchTodos(url){
    return dispatch => {
        dispatch(requestTodos());
        return axios({
            url: url,
            method: 'get',
            responseType: 'json'
        }).then(function(response){
            dispatch(receiveTodos(response.data));
        }).catch(function (response) {
            dispatch(receiveError(response.data));
        })
    }
}