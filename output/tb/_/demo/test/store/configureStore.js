define('demo:client/store/configureStore.jsx', function(require, exports, module) {

  /**
   * createStore 创建store,获取当前的state,注册store的事件,dispatch action等store相关操作;
   * 
   * applyMiddleware 可以为redux增加中间件,类似于node express的中间件,比如添加了一个log
   *
   * compose
   *
   *
   * redux 总共暴露出（export）5个方法:createStore,applyMiddleware,compose,  combineReducers（合并reducer使用） 和 bindActionCreator(将store.dispatch和action creater组合一起,简化调用)
   *
   *
   */
  'use strict';
  
  Object.defineProperty(exports, '__esModule', {
      value: true
  });
  exports['default'] = configureStore;
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
  
  var _redux = require('demo:node_modules/redux/lib/index');
  
  var _reduxThunk = require('demo:node_modules/redux-thunk/lib/index');
  
  var _reduxThunk2 = _interopRequireDefault(_reduxThunk);
  
  var _reducersIndex = require('demo:client/reducers/index.jsx');
  
  var _reducersIndex2 = _interopRequireDefault(_reducersIndex);
  
  // applyMiddleware来自redux可以包装store的dispatch(),
  // thunk作用是使action创建函数可以返回一个funciton代替一个action对象
  var buildStore = undefined;
  buildStore = (0, _redux.compose)((0, _redux.applyMiddleware)(_reduxThunk2['default']), window.devToolsExtension ? window.devToolsExtension() : DevTools.instrument())(_redux.createStore);
  
  function configureStore(initialState) {
      var store = buildStore(_reducersIndex2['default'], initialState);
  
      // 热替换选项,如果在热替换状态下,允许替换reducer
      if (module.hot) {
          module.hot.accept('/client/reducers/index.jsx', function () {
              store.replaceReducer(require('demo:client/reducers/index.jsx'));
          });
      }
  
      return store;
  }
  
  module.exports = exports['default'];

});
