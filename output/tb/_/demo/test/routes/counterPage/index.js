define('demo:client/routes/counterPage/index.jsx', function(require, exports, module) {

  'use strict';
  
  Object.defineProperty(exports, '__esModule', {
      value: true
  });
  
  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
  
  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
  
  function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
  
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
  
  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
  
  var _react = require('demo:node_modules/react/react');
  
  var _react2 = _interopRequireDefault(_react);
  
  var _componentsCounterIndex = require('demo:client/components/counter/index.jsx');
  
  var _componentsCounterIndex2 = _interopRequireDefault(_componentsCounterIndex);
  
  var _redux = require('demo:node_modules/redux/lib/index');
  
  var _reactRedux = require('demo:node_modules/react-redux/lib/index');
  
  var _actionsCounterPageIndex = require('demo:client/actions/counterPage/index.jsx');
  
  var CounterAction = _interopRequireWildcard(_actionsCounterPageIndex);
  
  var CounterPage = (function (_Component) {
      _inherits(CounterPage, _Component);
  
      function CounterPage(props) {
          _classCallCheck(this, CounterPage);
  
          _get(Object.getPrototypeOf(CounterPage.prototype), 'constructor', this).call(this, props);
      }
  
      _createClass(CounterPage, [{
          key: 'render',
          value: function render() {
              var _props = this.props;
              var counter = _props.counter;
              var actions = _props.actions;
  
              return _react2['default'].createElement(
                  'div',
                  { className: 'container' },
                  _react2['default'].createElement(
                      'h4',
                      null,
                      '这是一个计数器demo:'
                  ),
                  _react2['default'].createElement(_componentsCounterIndex2['default'], { counter: counter,
                      increment: actions.increment,
                      incrementIfOdd: actions.incrementIfOdd,
                      incrementAsync: actions.incrementAsync,
                      decrement: actions.decrement })
              );
          }
      }]);
  
      return CounterPage;
  })(_react.Component);
  
  exports['default'] = (0, _reactRedux.connect)(function (state) {
      return {
          counter: state.counter
      };
  }, function (dispatch) {
      return {
          actions: (0, _redux.bindActionCreators)(CounterAction, dispatch)
      };
  })(CounterPage);
  module.exports = exports['default'];

});
