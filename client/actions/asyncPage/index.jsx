import * as types from '../../constants/asyncActionTypes';
import fetch from 'isomorphic-fetch';

export function selectReddit(reddit) {
    return {
        type: types.SELECT_REDDIT,
        reddit
    }
}

export function invalidateReddit(reddit) {
    return {
        type: types.INVALIDATE_REDDIT,
        reddit
    }
}
//开始获取新闻
function requestPosts(reddit){
    return {
        type: types.REQUEST_POST,
        reddit
    }
}
//  获取新闻成功
function receivePosts(reddit, json) {
    return {
        type: types.RECEIVE_POST,
        reddit: reddit,
        posts: json.data.children.map(child => child.data),
        receiveAt: Date.now()
    }
}

// 获取文章,先触发requestPosts开始获取action,完成后触发receivePosts获取成功的action
export function fetchPosts(reddit) {
    return dispatch => {
        dispatch(requestPosts(reddit))
        return fetch('https://www.reddit.com/r/${reddit}.json')
            .then(response => response.json())
            .then(json => dispatch(receivePosts(reddit,json)))
    }
}
//是否需要获取文章
function shouldFetchPosts(state,reddit){
    const posts = state.postByReddit[reddit];
    if(!posts){
        return true;
    }
    if (posts.isFetching){
        return false;
    }
    return pos.didInvalidate;
}
// 如果需要则开始获取文章
export function fetchPostsIfNeed(reddit) {
    return (dispatch,getState) => {
        if (shouldFetchPosts(getState(),reddit)){
            return dispatch(fetchPosts(reddit));
        }
    }
}


