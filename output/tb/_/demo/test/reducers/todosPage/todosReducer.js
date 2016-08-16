define('demo:client/reducers/todosPage/todosReducer.jsx', function(require, exports, module) {

  'use strict';
  
  Object.defineProperty(exports, '__esModule', {
      value: true
  });
  exports['default'] = todosReducer;
  
  function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }
  
  var _constantsTodosActionTypes = require('demo:client/constants/todosActionTypes.jsx');
  
  var types = _interopRequireWildcard(_constantsTodosActionTypes);
  
  function todosReducer(state, action) {
      if (state === undefined) state = {
          isLoading: false,
          data: [],
          error: false
      };
  
      switch (action.type) {
          case types.RECV_ERROR:
              return Object.assign({}, state, {
                  isLoading: false,
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
              return Object.assign({}, state, {
                  isLoading: true,
                  error: false
              });
          default:
              return state;
      }
  }
  
  module.exports = exports['default'];

});
