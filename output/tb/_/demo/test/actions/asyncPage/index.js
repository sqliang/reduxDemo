define('demo:client/actions/asyncPage/index.jsx', function(require, exports, module) {

  'use strict';
  
  Object.defineProperty(exports, '__esModule', {
      value: true
  });
  exports.selectReddit = selectReddit;
  exports.invalidateReddit = invalidateReddit;
  exports.fetchPosts = fetchPosts;
  exports.fetchPostsIfNeed = fetchPostsIfNeed;
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
  
  function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }
  
  var _constantsAsyncActionTypes = require('demo:client/constants/asyncActionTypes.jsx');
  
  var types = _interopRequireWildcard(_constantsAsyncActionTypes);
  
  var _isomorphicFetch = require('demo:node_modules/isomorphic-fetch/fetch-npm-browserify');
  
  var _isomorphicFetch2 = _interopRequireDefault(_isomorphicFetch);
  
  function selectReddit(reddit) {
      return {
          type: types.SELECT_REDDIT,
          reddit: reddit
      };
  }
  
  function invalidateReddit(reddit) {
      return {
          type: types.INVALIDATE_REDDIT,
          reddit: reddit
      };
  }
  
  //开始获取新闻
  function requestPosts(reddit) {
      return {
          type: types.REQUEST_POST,
          reddit: reddit
      };
  }
  //  获取新闻成功
  function receivePosts(reddit, json) {
      return {
          type: types.RECEIVE_POST,
          reddit: reddit,
          posts: json.data.children.map(function (child) {
              return child.data;
          }),
          receiveAt: Date.now()
      };
  }
  
  // 获取文章,先触发requestPosts开始获取action,完成后触发receivePosts获取成功的action
  
  function fetchPosts(reddit) {
      return function (dispatch) {
          dispatch(requestPosts(reddit));
          return (0, _isomorphicFetch2['default'])('https://www.reddit.com/r/${reddit}.json').then(function (response) {
              return response.json();
          }).then(function (json) {
              return dispatch(receivePosts(reddit, json));
          });
      };
  }
  
  //是否需要获取文章
  function shouldFetchPosts(state, reddit) {
      var posts = state.postByReddit[reddit];
      if (!posts) {
          return true;
      }
      if (posts.isFetching) {
          return false;
      }
      return pos.didInvalidate;
  }
  // 如果需要则开始获取文章
  
  function fetchPostsIfNeed(reddit) {
      return function (dispatch, getState) {
          if (shouldFetchPosts(getState(), reddit)) {
              return dispatch(fetchPosts(reddit));
          }
      };
  }

});
