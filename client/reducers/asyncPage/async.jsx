import * as types from '../../constants/asyncActionTypes';
import  { combineReducers } from 'redux';

let initSelectState = 'reactjs';

function selectReddit(state = initSelectState, action) {
    switch (action.type) {
        case types.SELECT_REDDIT:
            return action.reddit;
        default:
            return state;
    }
}

let initPostsState = {
    // 是否正在获取更新
    isFetching: false,
    // 是否废弃
    didInvalidate: false,
    // 内容
    items: []
};

function posts(state = initPostsState,action){
    switch (action.type) {
        case types.INVALIDATE_REDDIT:
            return Object.assign({}, state, {
                didInvalidate: true
            });
        case types.REQUEST_POST:
            return Object.assign({}, state,{
                isFetching: true,
                didInvalidate: false
            });
        case types.RECEIVE_POST:
            return Object.assign({},state, {
                isFetching: false,
                didInvalidate: false,
                items: action.posts,
                lastUpdated: action.receiveAt
            });
        default:
            return state;
    }
}

function postsByReddit(state = {}, action){
    switch (action.type) {
        case types.INVALIDATE_REDDIT:
        case types.RECEIVE_POST:
        case types.REQUEST_POST:
            return Object.assign({},state,{
                [action.reddit]: posts(state[action.reddit], action)
            })
        default:
            return state;
    }
}

const rootReducer = combineReducers({
    postsByReddit,
    selectReddit
});

export default rootReducer;
