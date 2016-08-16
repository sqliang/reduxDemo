define('demo:client/reducers/counterPage/counter.jsx', function(require, exports, module) {

  'use strict';
  
  Object.defineProperty(exports, '__esModule', {
      value: true
  });
  exports['default'] = counter;
  
  function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }
  
  var _constantsCounterActionType = require('demo:client/constants/counterActionType.jsx');
  
  var types = _interopRequireWildcard(_constantsCounterActionType);
  
  var initState = 0;
  
  function counter(state, action) {
      if (state === undefined) state = initState;
  
      switch (action.type) {
          case types.INCREMENT_COUNTER:
              return state + 1;
          case types.DECREMENT_COUNTER:
              return state - 1;
          default:
              return state;
      }
  }
  
  module.exports = exports['default'];

});
