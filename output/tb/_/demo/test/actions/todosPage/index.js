define('demo:client/actions/todosPage/index.jsx', function(require, exports, module) {

  'use strict';
  
  Object.defineProperty(exports, '__esModule', {
      value: true
  });
  exports.fetchTodos = fetchTodos;
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
  
  function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }
  
  var _constantsTodosActionTypes = require('demo:client/constants/todosActionTypes.jsx');
  
  var types = _interopRequireWildcard(_constantsTodosActionTypes);
  
  var _axios = require('demo:node_modules/axios/index');
  
  var _axios2 = _interopRequireDefault(_axios);
  
  function requestTodos() {
      return {
          type: types.REQ_TODOS
      };
  }
  
  function receiveTodos(json) {
      return {
          type: types.RECV_TODOS,
          data: json
      };
  }
  
  function receiveError(json) {
      return {
          type: types.RECV_ERROR,
          data: json
      };
  }
  
  function fetchTodos(url) {
      return function (dispatch) {
          dispatch(requestTodos());
          return (0, _axios2['default'])({
              url: url,
              method: 'get',
              responseType: 'json'
          }).then(function (response) {
              dispatch(receiveTodos(response.data));
          })['catch'](function (response) {
              dispatch(receiveError(response.data));
          });
      };
  }

});
