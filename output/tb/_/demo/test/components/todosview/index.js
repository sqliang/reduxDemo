define('demo:client/components/todosview/index.jsx', function(require, exports, module) {

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
  
  var _immutable = require('demo:node_modules/immutable/dist/immutable');
  
  var _immutable2 = _interopRequireDefault(_immutable);
  
  var TodosView = (function (_Component) {
      _inherits(TodosView, _Component);
  
      function TodosView(props) {
          _classCallCheck(this, TodosView);
  
          _get(Object.getPrototypeOf(TodosView.prototype), 'constructor', this).call(this, props);
      }
  
      _createClass(TodosView, [{
          key: 'handleDelete',
          value: function handleDelete(e) {
              var id = Number(e.target.dataset.id);
              this.props.deleteTodo(id);
          }
      }, {
          key: 'handleEdit',
          value: function handleEdit(e) {
              var id = Number(e.target.dataset.id);
              var currentVal = this.props.todos.get(id);
              var text = window.prompt('', currentVal);
              this.props.editTodo(id, text);
          }
      }, {
          key: 'render',
          value: function render() {
              var _this = this;
  
              var todos = this.props.todos;
  
              return _react2['default'].createElement(
                  'div',
                  { className: 'container' },
                  todos.map(function (todo, index) {
                      return _react2['default'].createElement(
                          'div',
                          { key: index },
                          _react2['default'].createElement(
                              'span',
                              null,
                              todo
                          ),
                          _react2['default'].createElement(
                              'button',
                              { className: 'btn btn-danger',
                                  'data-id': index,
                                  onClick: _this.handleDelete },
                              '删除'
                          ),
                          _react2['default'].createElement(
                              'button',
                              { className: 'btn btn-primary',
                                  'data-id': index,
                                  onClick: _this.handleEdit },
                              '编辑'
                          )
                      );
                  })
              );
          }
      }]);
  
      return TodosView;
  })(_react.Component);
  
  exports['default'] = TodosView;
  
  TodosView.propTypes = {
      todos: _react.PropTypes.instanceOf(_immutable2['default'].List).isRequired,
      deleteTodo: _react.PropTypes.func.isRequired,
      editTodo: _react.PropTypes.func.isRequired
  };
  module.exports = exports['default'];

});
