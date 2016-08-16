define('demo:client/reducers/index.jsx', function(require, exports, module) {

  /**
   * combineReducers 可以将多个reducer组合成一个root reducer
   * 
   * 
   */
  
  'use strict';
  
  Object.defineProperty(exports, '__esModule', {
    value: true
  });
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
  
  var _redux = require('demo:node_modules/redux/lib/index');
  
  var _homeItems = require('demo:client/reducers/home/items.jsx');
  
  var _homeItems2 = _interopRequireDefault(_homeItems);
  
  var _homeFilter = require('demo:client/reducers/home/filter.jsx');
  
  var _homeFilter2 = _interopRequireDefault(_homeFilter);
  
  var _counterPageCounter = require('demo:client/reducers/counterPage/counter.jsx');
  
  var _counterPageCounter2 = _interopRequireDefault(_counterPageCounter);
  
  var _todosPageTodosReducer = require('demo:client/reducers/todosPage/todosReducer.jsx');
  
  var _todosPageTodosReducer2 = _interopRequireDefault(_todosPageTodosReducer);
  
  var rootReducer = (0, _redux.combineReducers)({
    items: _homeItems2['default'],
    filter: _homeFilter2['default'],
    counter: _counterPageCounter2['default'],
    todos: _todosPageTodosReducer2['default']
  });
  
  exports['default'] = rootReducer;
  module.exports = exports['default'];

});
