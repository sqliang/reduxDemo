define('demo:client/routes/asyncPage/index.jsx', function(require, exports, module) {

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
  
  var _actionsAsyncPageIndex = require('demo:client/actions/asyncPage/index.jsx');
  
  var _actionsAsyncPageIndex2 = _interopRequireDefault(_actionsAsyncPageIndex);
  
  var _componentsPickerIndex = require('demo:client/components/picker/index.jsx');
  
  var _componentsPickerIndex2 = _interopRequireDefault(_componentsPickerIndex);
  
  var _componentsPostsIndex = require('demo:client/components/posts/index.jsx');
  
  var _componentsPostsIndex2 = _interopRequireDefault(_componentsPostsIndex);
  
  var AsyncPage = (function (_Component) {
      _inherits(AsyncPage, _Component);
  
      function AsyncPage(props) {
          _classCallCheck(this, AsyncPage);
  
          _get(Object.getPrototypeOf(AsyncPage.prototype), 'constructor', this).call(this, props);
          this.handleChange = this.handleChange.bind(this);
          this.handleRefershClick = this.handleRefershClick.bind(this);
      }
  
      _createClass(AsyncPage, [{
          key: 'componentDidMount',
          value: function componentDidMount() {
              var _props = this.props;
              var dispatch = _props.dispatch;
              var selectReddit = _props.selectReddit;
  
              dispatch(_actionsAsyncPageIndex2['default'].fetchPostsIfNeed(selectReddit));
          }
      }, {
          key: 'componentWillReceiveProps',
          value: function componentWillReceiveProps(nextProps) {
              if (nextProps.selectReddit !== this.props.selectReddit) {
                  var dispatch = nextProps.dispatch;
                  var selectReddit = nextProps.selectReddit;
  
                  dispatch(_actionsAsyncPageIndex2['default'].fetchPostsIfNeed(selectReddit));
              }
          }
      }, {
          key: 'handleChange',
          value: function handleChange(nextReddit) {
              this.props.dispatch(_actionsAsyncPageIndex2['default'].selectReddit(nextReddit));
          }
      }, {
          key: 'handleRefershClick',
          value: function handleRefershClick(event) {
              event.preventDefault();
              var _props2 = this.props;
              var dispatch = _props2.dispatch;
              var selectReddit = _props2.selectReddit;
  
              dispatch(_actionsAsyncPageIndex2['default'].invalidateReddit(selectReddit));
              dispatch(_actionsAsyncPageIndex2['default'].fetchPostsIfNeed(selectReddit));
          }
      }, {
          key: 'render',
          value: function render() {
              var _props3 = this.props;
              var selectReddit = _props3.selectReddit;
              var posts = _props3.posts;
              var isFetching = _props3.isFetching;
              var lastUpdated = _props3.lastUpdated;
  
              return _react2['default'].createElement(
                  'div',
                  null,
                  _react2['default'].createElement(_componentsPickerIndex2['default'], { value: selectReddit,
                      onChange: this.handleChange,
                      options: ['reactjs', 'frontend'] }),
                  _react2['default'].createElement(
                      'p',
                      null,
                      lastUpdated && _react2['default'].createElement(
                          'span',
                          null,
                          'laste update at ',
                          new Date(lastUpdated).toLocaleDateString(),
                          '.',
                          ' '
                      ),
                      !isFetching && _react2['default'].createElement(
                          'button',
                          { className: 'btn btn-default',
                              onClick: this.handleRefershClick },
                          '刷新'
                      ),
                      isFetching && posts.length === 0 && _react2['default'].createElement(
                          'h2',
                          null,
                          'Loading......'
                      ),
                      posts.length > 0 && _react2['default'].createElement(
                          'div',
                          { style: { opacity: isFetching ? 0.5 : 1 } },
                          _react2['default'].createElement(_componentsPostsIndex2['default'], { posts: posts })
                      )
                  )
              );
          }
      }]);
  
      return AsyncPage;
  })(_react.Component);
  
  exports['default'] = (0, _reactRedux.connect)(function (state) {
      var selectReddit = state.selectReddit;
      var postsByReddit = state.postsByReddit;
  
      var _ref = postsByReddit[selectReddit] || {
          isFetching: true,
          items: []
      };
  
      var isFetching = _ref.isFetching;
      var lastUpdated = _ref.lastUpdated;
      var posts = _ref.items;
  
      return {
          selectReddit: selectReddit,
          posts: posts,
          isFetching: isFetching,
          lastUpdated: lastUpdated
      };
  })(AsyncPage);
  module.exports = exports['default'];

});
