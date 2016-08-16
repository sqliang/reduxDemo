define('demo:client/reducers/home/items.jsx', function(require, exports, module) {

  /**
   * 
   */
  'use strict';
  
  Object.defineProperty(exports, '__esModule', {
      value: true
  });
  exports['default'] = items;
  
  function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
  
  var _immutable = require('demo:node_modules/immutable/dist/immutable');
  
  var _immutable2 = _interopRequireDefault(_immutable);
  
  var _constantsHomeActionTypes = require('demo:client/constants/homeActionTypes.jsx');
  
  var types = _interopRequireWildcard(_constantsHomeActionTypes);
  
  var initialItems = _immutable2['default'].List([1, 2, 3]);
  
  function items(state, action) {
      if (state === undefined) state = initialItems;
  
      switch (action.type) {
          case types.ADD_ITEM:
              return state.push(state.size !== 0 ? state.get(-1) + 1 : 1);
          case types.DELETE_ITEM:
              return state['delete'](state.indexOf(action.item));
          case types.DELETE_ALL:
              return state.clear();
          default:
              return state;
      }
  }
  
  module.exports = exports['default'];

});
