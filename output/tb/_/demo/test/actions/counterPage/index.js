define('demo:client/actions/counterPage/index.jsx', function(require, exports, module) {

  'use strict';
  
  Object.defineProperty(exports, '__esModule', {
      value: true
  });
  exports.increment = increment;
  exports.decrement = decrement;
  exports.incrementIfOdd = incrementIfOdd;
  exports.incrementAsync = incrementAsync;
  
  function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }
  
  var _constantsCounterActionType = require('demo:client/constants/counterActionType.jsx');
  
  var types = _interopRequireWildcard(_constantsCounterActionType);
  
  function increment() {
      return {
          type: types.INCREMENT_COUNTER
      };
  }
  
  function decrement() {
      return {
          type: types.DECREMENT_COUNTER
      };
  }
  
  //返回一个函数,包含dispatch 和getState两个参数,dispatch用于执行action的方法,getState返回state
  
  function incrementIfOdd() {
      return function (dispatch, getState) {
          var _getState = getState();
  
          var counter = _getState.counter;
  
          if (counter % 2 === 0) {
              return;
          } else {
              dispatch(increment());
          }
      };
  }
  
  //返回一个函数,包含dispatch一个参数,用于执行action的方法,延迟800ms
  
  function incrementAsync() {
      var delay = arguments.length <= 0 || arguments[0] === undefined ? 800 : arguments[0];
  
      return function (dispatch) {
          setTimeout(function () {
              dispatch(increment());
          }, delay);
      };
  }

});
