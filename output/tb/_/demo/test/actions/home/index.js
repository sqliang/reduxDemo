define('demo:client/actions/home/index.jsx', function(require, exports, module) {

  'use strict';
  
  Object.defineProperty(exports, '__esModule', {
      value: true
  });
  exports.addItem = addItem;
  exports.deleteItem = deleteItem;
  exports.deleteAll = deleteAll;
  exports.filterItem = filterItem;
  exports.getAsync = getAsync;
  
  function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }
  
  var _constantsHomeActionTypes = require('demo:client/constants/homeActionTypes.jsx');
  
  var types = _interopRequireWildcard(_constantsHomeActionTypes);
  
  function addItem() {
      return function (dispatch) {
          setTimeout(function () {
              return dispatch({ type: types.ADD_ITEM });
          }, 300);
      };
  }
  
  function deleteItem(item) {
      return {
          type: types.DELETE_ITEM,
          item: item
      };
  }
  
  function deleteAll() {
      return {
          type: types.DELETE_ALL
      };
  }
  
  function filterItem(e) {
      var filterItem = e.target.value;
  
      return {
          type: types.FILTER_ITEM,
          filterItem: filterItem
      };
  }
  
  function getAsync() {
      return function (dispatch) {};
  }

});
