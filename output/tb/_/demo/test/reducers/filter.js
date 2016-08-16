define('demo:client/reducers/filter.jsx', function(require, exports, module) {

  'use strict';
  
  Object.defineProperty(exports, '__esModule', {
      value: true
  });
  exports['default'] = filter;
  
  var _constantsActionTypes = require('demo:client/constants/actionTypes.jsx');
  
  var initialFilterItem = '';
  
  function filter(state, action) {
      if (state === undefined) state = initialFilterItem;
  
      switch (action.type) {
          case _constantsActionTypes.FILTER_ITEM:
              return action.filterItem;
          default:
              return state;
      }
  }
  
  module.exports = exports['default'];

});
