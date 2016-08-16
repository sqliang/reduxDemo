define('demo:client/routes/todosPage/index.jsx', function(require, exports, module) {

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
  
  var _reactRedux = require('demo:node_modules/react-redux/lib/index');
  
  var _redux = require('demo:node_modules/redux/lib/index');
  
  var _actionsTodosPageIndex = require('demo:client/actions/todosPage/index.jsx');
  
  var TodosPage = (function (_Component) {
      _inherits(TodosPage, _Component);
  
      function TodosPage(props) {
          _classCallCheck(this, TodosPage);
  
          _get(Object.getPrototypeOf(TodosPage.prototype), 'constructor', this).call(this, props);
      }
  
      _createClass(TodosPage, [{
          key: 'componentWillMount',
          value: function componentWillMount() {
              var url = './test.json';
              var fetchTodos = this.props.fetchTodos;
  
              fetchTodos(url);
          }
  
          /* componentDidMount(){
               const url = './test.json';
               const {fetchTodos} =  this.props;
               fetchTodos(url);
           }*/
      }, {
          key: 'handleClick',
          value: function handleClick() {
              var url = './test.json';
              var fetchTodos = this.props.fetchTodos;
  
              fetchTodos(url);
          }
      }, {
          key: 'renderData',
          value: function renderData() {
              var todos = this.props.todos;
  
              if (todos.isLoading) {
                  return _react2['default'].createElement(
                      'span',
                      null,
                      'loading'
                  );
              }
              if (todos.error) {
                  return _react2['default'].createElement(
                      'h4',
                      null,
                      'something error'
                  );
              }
              if (todos.data.length > 0) {
                  return _react2['default'].createElement(
                      'table',
                      { className: 'table' },
                      _react2['default'].createElement(
                          'thead',
                          null,
                          _react2['default'].createElement(
                              'tr',
                              null,
                              _react2['default'].createElement(
                                  'th',
                                  null,
                                  '#'
                              ),
                              _react2['default'].createElement(
                                  'th',
                                  null,
                                  'name'
                              ),
                              _react2['default'].createElement(
                                  'th',
                                  null,
                                  'capital'
                              ),
                              _react2['default'].createElement(
                                  'th',
                                  null,
                                  'region'
                              )
                          )
                      ),
                      _react2['default'].createElement(
                          'tbody',
                          null,
                          todos.data.map(function (todo, index) {
                              return _react2['default'].createElement(
                                  'tr',
                                  { key: index },
                                  _react2['default'].createElement(
                                      'td',
                                      null,
                                      index
                                  ),
                                  _react2['default'].createElement(
                                      'td',
                                      null,
                                      todo.name
                                  ),
                                  _react2['default'].createElement(
                                      'td',
                                      null,
                                      todo.capital
                                  ),
                                  _react2['default'].createElement(
                                      'td',
                                      null,
                                      todo.region
                                  )
                              );
                          })
                      )
                  );
              }
          }
      }, {
          key: 'render',
          value: function render() {
              return _react2['default'].createElement(
                  'div',
                  { className: 'container', id: 'todo-list' },
                  _react2['default'].createElement(
                      'h3',
                      null,
                      'Hello,world.'
                  ),
                  _react2['default'].createElement(
                      'button',
                      { className: 'btn btn-default', onClick: this.handleClick.bind(this) },
                      '获取数据'
                  ),
                  _react2['default'].createElement(
                      'div',
                      null,
                      this.renderData()
                  )
              );
          }
      }]);
  
      return TodosPage;
  })(_react.Component);
  
  exports['default'] = (0, _reactRedux.connect)(function (state) {
      return {
          todos: state.todos
      };
  }, function (dispatch) {
      return {
          fetchTodos: (0, _redux.bindActionCreators)(_actionsTodosPageIndex.fetchTodos, dispatch)
      };
  })(TodosPage);
  module.exports = exports['default'];

});
