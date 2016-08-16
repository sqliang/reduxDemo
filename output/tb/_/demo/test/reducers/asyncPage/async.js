define('demo:client/reducers/asyncPage/async.jsx', function(require, exports, module) {

  'use strict';
  
  Object.defineProperty(exports, '__esModule', {
      value: true
  });
  
  function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }
  
  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  
  var _constantsAsyncActionTypes = require('demo:client/constants/asyncActionTypes.jsx');
  
  var types = _interopRequireWildcard(_constantsAsyncActionTypes);
  
  var _redux = require('demo:node_modules/redux/lib/index');
  
  var initSelectState = 'reactjs';
  
  function selectReddit(state, action) {
      if (state === undefined) state = initSelectState;
  
      switch (action.type) {
          case types.SELECT_REDDIT:
              return action.reddit;
          default:
              return state;
      }
  }
  
  var initPostsState = {
      // 是否正在获取更新
      isFetching: false,
      // 是否废弃
      didInvalidate: false,
      // 内容
      items: []
  };
  
  function posts(state, action) {
      if (state === undefined) state = initPostsState;
  
      switch (action.type) {
          case types.INVALIDATE_REDDIT:
              return Object.assign({}, state, {
                  didInvalidate: true
              });
          case types.REQUEST_POST:
              return Object.assign({}, state, {
                  isFetching: true,
                  didInvalidate: false
              });
          case types.RECEIVE_POST:
              return Object.assign({}, state, {
                  isFetching: false,
                  didInvalidate: false,
                  items: action.posts,
                  lastUpdated: action.receiveAt
              });
          default:
              return state;
      }
  }
  
  function postsByReddit(state, action) {
      if (state === undefined) state = {};
  
      switch (action.type) {
          case types.INVALIDATE_REDDIT:
          case types.RECEIVE_POST:
          case types.REQUEST_POST:
              return Object.assign({}, state, _defineProperty({}, action.reddit, posts(state[action.reddit], action)));
          default:
              return state;
      }
  }
  
  var rootReducer = (0, _redux.combineReducers)({
      postsByReddit: postsByReddit,
      selectReddit: selectReddit
  });
  
  exports['default'] = rootReducer;
  module.exports = exports['default'];

});
