define('demo:client/store/immutifyState.jsx', function(require, exports, module) {

  'use strict';
  
  Object.defineProperty(exports, '__esModule', {
      value: true
  });
  exports['default'] = immutifyState;
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
  
  var _immutable = require('demo:node_modules/immutable/dist/immutable');
  
  var _objectAssign = require('demo:node_modules/object-assign/index');
  
  var _objectAssign2 = _interopRequireDefault(_objectAssign);
  
  Object.assign = Object.assign || _objectAssign2['default'];
  
  function immutifyState(obj) {
      var objMut = Object.assign({}, obj);
      Object.keys(objMut).forEach(function (key) {
          objMut[key] = (0, _immutable.fromJS)(objMut[key]);
      });
      return objMut;
  }
  
  module.exports = exports['default'];

});
