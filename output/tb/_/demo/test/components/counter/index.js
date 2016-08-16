define('demo:client/components/counter/index.jsx', function(require, exports, module) {

  'use strict';
  
  Object.defineProperty(exports, '__esModule', {
      value: true
  });
  
  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
  
  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
  
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
  
  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
  
  var _react = require('demo:node_modules/react/react');
  
  var _react2 = _interopRequireDefault(_react);
  
  var Counter = (function (_Component) {
      _inherits(Counter, _Component);
  
      function Counter(props) {
          _classCallCheck(this, Counter);
  
          _get(Object.getPrototypeOf(Counter.prototype), 'constructor', this).call(this, props);
      }
  
      _createClass(Counter, [{
          key: 'render',
          value: function render() {
              var _props = this.props;
              var increment = _props.increment;
              var incrementIfOdd = _props.incrementIfOdd;
              var incrementAsync = _props.incrementAsync;
              var decrement = _props.decrement;
              var counter = _props.counter;
  
              return _react2['default'].createElement(
                  'div',
                  null,
                  _react2['default'].createElement(
                      'p',
                      null,
                      '点击: ',
                      counter,
                      ' 次'
                  ),
                  _react2['default'].createElement(
                      'p',
                      null,
                      _react2['default'].createElement(
                          'button',
                          { className: 'btn btn-primary', onClick: increment },
                          '+'
                      ),
                      ' ',
                      _react2['default'].createElement(
                          'button',
                          { className: 'btn btn-default', onClick: decrement },
                          '-'
                      ),
                      ' ',
                      _react2['default'].createElement(
                          'button',
                          { className: 'btn btn-info', onClick: incrementIfOdd },
                          'Increment if odd'
                      ),
                      ' ',
                      _react2['default'].createElement(
                          'button',
                          { className: 'btn btn-danger', onClick: incrementAsync },
                          'Increment async'
                      )
                  )
              );
          }
      }]);
  
      return Counter;
  })(_react.Component);
  
  Counter.proTypes = {
      increment: _react.PropTypes.func.isRequired,
      incrementIfOdd: _react.PropTypes.func.isRequired,
      incrementAsync: _react.PropTypes.func.isRequired,
      decrement: _react.PropTypes.func.isRequired,
      counter: _react.PropTypes.number.isRequired
  };
  exports['default'] = Counter;
  module.exports = exports['default'];

});
