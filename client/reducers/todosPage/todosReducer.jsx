import * as types from '../../constants/todosActionTypes';


export default function todosReducer(state = {
    isLoading:false,
    data: [],
    error: false
}, action) {
    switch (action.type) {
        case types.RECV_ERROR:
            return Object.assign({},state,{
                isLoading:false,
                data: action.data,
                error: true
            });
        case types.RECV_TODOS:
            return Object.assign({}, state, {
                isLoading: false,
                data: action.data,
                error: false
            });
        case types.REQ_TODOS:
            return Object.assign({},state,{
                isLoading: true,
                error: false
            });
        default:
            return state;
    }
}