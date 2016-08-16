define('demo:client/router.jsx', function(require, exports, module) {

  'use strict';
  
  Object.defineProperty(exports, '__esModule', {
      value: true
  });
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
  
  var _react = require('demo:node_modules/react/react');
  
  var _react2 = _interopRequireDefault(_react);
  
  var _reactRouter = require('demo:node_modules/react-router/lib/index');
  
  var _reduxReactRouter = require('demo:node_modules/redux-react-router/lib/index');
  
  var _reactRedux = require('demo:node_modules/react-redux/lib/index');
  
  var _storeConfigureStore = require('demo:client/store/configureStore.jsx');
  
  var _storeConfigureStore2 = _interopRequireDefault(_storeConfigureStore);
  
  var _layout = require('demo:client/layout.jsx');
  
  var _layout2 = _interopRequireDefault(_layout);
  
  var _routesHomeIndex = require('demo:client/routes/home/index.jsx');
  
  var _routesHomeIndex2 = _interopRequireDefault(_routesHomeIndex);
  
  var _routesCounterPageIndex = require('demo:client/routes/counterPage/index.jsx');
  
  var _routesCounterPageIndex2 = _interopRequireDefault(_routesCounterPageIndex);
  
  var _routesTodosPageIndex = require('demo:client/routes/todosPage/index.jsx');
  
  var _routesTodosPageIndex2 = _interopRequireDefault(_routesTodosPageIndex);
  
  var store = (0, _storeConfigureStore2['default'])();
  
  var routes = _react2['default'].createElement(
      _reactRedux.Provider,
      { store: store },
      _react2['default'].createElement(
          _reactRouter.Router,
          { history: _reactRouter.hashHistory },
          _react2['default'].createElement(
              _reactRouter.Route,
              { path: '/',
                  component: _layout2['default'] },
              _react2['default'].createElement(_reactRouter.IndexRoute, { component: _routesHomeIndex2['default'] }),
              _react2['default'].createElement(_reactRouter.Route, { path: 'counter', component: _routesCounterPageIndex2['default'] }),
              _react2['default'].createElement(_reactRouter.Route, { path: 'todos', component: _routesTodosPageIndex2['default'] })
          )
      )
  );
  
  exports['default'] = routes;
  module.exports = exports['default'];

});
