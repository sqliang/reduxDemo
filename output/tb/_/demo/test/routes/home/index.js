define('demo:client/routes/home/index.jsx', function(require, exports, module) {

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
  
  var _componentsSearchBarIndex = require('demo:client/components/searchBar/index.jsx');
  
  var _componentsSearchBarIndex2 = _interopRequireDefault(_componentsSearchBarIndex);
  
  var _componentsContentIndex = require('demo:client/components/content/index.jsx');
  
  var _componentsContentIndex2 = _interopRequireDefault(_componentsContentIndex);
  
  var _componentsFooterIndex = require('demo:client/components/footer/index.jsx');
  
  var _componentsFooterIndex2 = _interopRequireDefault(_componentsFooterIndex);
  
  var _axios = require('demo:node_modules/axios/index');
  
  var _axios2 = _interopRequireDefault(_axios);
  
  var _reactRedux = require('demo:node_modules/react-redux/lib/index');
  
  var _actionsHomeIndex = require('demo:client/actions/home/index.jsx');
  
  var ItemsActions = _interopRequireWildcard(_actionsHomeIndex);
  
  /**
   * bindActionCreators 将store.dispatch 和action creater 组合在一起,简化调用
   *
   */
  
  var _redux = require('demo:node_modules/redux/lib/index');
  
  var Home = (function (_Component) {
      _inherits(Home, _Component);
  
      function Home() {
          _classCallCheck(this, Home);
  
          _get(Object.getPrototypeOf(Home.prototype), 'constructor', this).apply(this, arguments);
      }
  
      _createClass(Home, [{
          key: 'componentDidMount',
          value: function componentDidMount() {
              // GET
              _axios2['default'].get('https://www.reddit.com/r/reactjs.json', {
                  params: {
                      id: 3,
                      name: 'sqliang'
                  }
              }).then(function (res) {
                  console.dir(res);
                  console.log(res.data);
              })['catch'](function (error) {
                  console.error(error);
              });
              _axios2['default'].get('https://www.reddit.com/r/frontend.json').then(function (res) {
                  console.log(res);
              })['catch'](function (error) {
                  console.log(error);
              });
              //批量ajax
              _axios2['default'].all([_axios2['default'].get('https://www.reddit.com/r/reactjs.json'), _axios2['default'].get('https://www.reddit.com/r/frontend.json')]).then(_axios2['default'].spread(function (res1, res2) {
                  console.log("=======>>>all:");
                  console.log(res1);
                  console.log(res2);
              }));
          }
      }, {
          key: 'render',
          value: function render() {
              var styles = {
                  width: '200px',
                  margin: '30px auto 0'
              };
              var actions = this.props.actions;
              return _react2['default'].createElement(
                  'div',
                  { className: 'client-routes-home' },
                  _react2['default'].createElement(
                      'div',
                      { style: styles },
                      _react2['default'].createElement(
                          'h2',
                          null,
                          'Manage Items'
                      ),
                      _react2['default'].createElement(_componentsSearchBarIndex2['default'], { filterItem: actions.filterItem }),
                      _react2['default'].createElement(_componentsContentIndex2['default'], { items: this.props.items, filter: this.props.filter, deleteItem: actions.deleteItem }),
                      _react2['default'].createElement(_componentsFooterIndex2['default'], { addItem: actions.addItem, deleteAll: actions.deleteAll })
                  )
              );
          }
      }]);
  
      return Home;
  })(_react.Component);
  
  Home.propTypes = {
      items: _react2['default'].PropTypes.object,
      filter: _react2['default'].PropTypes.string
  };
  
  /**
   * connect 就是将stroe中的必要数据作为props传递给React组件来render,并包装action creator 用于
   * 响应用户操作时dispatch一个action。
   *
   * 由于store中维护了一个state,因此,dispatch一个action后,接下来reducer根据这个action更新state
   *
   * connect([mapStateToProps], [mapDispatchToProps], [mergeProps], [options])
   *
   * 1.mapStateToProps是一个function,返回值表示的是需要merge进props的state。默认值为 () => {}
   *
   * 2.mapDispatchToProps是可以是一个function,返回值表示的是需要merge进props的actionCreators,这个里的
   * actionCreator应该是已经被包装了dispatch了的,推荐使用redux的bindActionCreators
   *
   * 3.mergeProps 用于自定义merge流程,parentProps指的就是组件自身的props
   * （stateProps, dispatchProps, parentProps） => ({
   *      ...parentProps,
   *      ...stateProps,
   *      ...dispatchProps
   *  })
   *  可以发现如果组件的props上出现同名,会被覆盖
   *
   *  options共有两个开关:pure代表是否打开优化,默认为true; withRef用来代表给包装在里面的组件一个ref,可以通过getWrappedInstance方法来获取这个ref,默认为false;
   *
   *  返回值:
   *  connect 返回一个函数,接收一个React组件的构造函数作为连接对象（如Home组件）,最终返回连接好的组件构造函数
   *
   */
  exports['default'] = (0, _reactRedux.connect)(function (state) {
      return {
          items: state.items,
          filter: state.filter
      };
  }, function (dispatch) {
      return {
          actions: (0, _redux.bindActionCreators)(ItemsActions, dispatch)
      };
  })(Home);
  module.exports = exports['default'];

});
