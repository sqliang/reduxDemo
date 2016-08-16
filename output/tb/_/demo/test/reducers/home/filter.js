define('demo:client/reducers/home/filter.jsx', function(require, exports, module) {

  'use strict';
  
  Object.defineProperty(exports, '__esModule', {
      value: true
  });
  exports['default'] = filter;
  
  var _constantsHomeActionTypes = require('demo:client/constants/homeActionTypes.jsx');
  
  var initialFilterItem = '';
  
  function filter(state, action) {
      if (state === undefined) state = initialFilterItem;
  
      switch (action.type) {
          case _constantsHomeActionTypes.FILTER_ITEM:
              return action.filterItem;
          default:
              return state;
      }
  }
  
  module.exports = exports['default'];

});
