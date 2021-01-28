"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vue = _interopRequireDefault(require("vue"));

var _vueRouter = _interopRequireDefault(require("vue-router"));

var _home = _interopRequireDefault(require("./pages/home"));

var _index = _interopRequireDefault(require("./pages/index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

_vue["default"].use(_vueRouter["default"]);

var _default = new _vueRouter["default"]({
  routes: [{
    path: '/',
    name: 'home',
    component: _home["default"],
    redirect: '/index',
    children: [{
      path: '/index',
      name: 'index',
      component: _index["default"]
    }, {
      path: '/product/:id',
      name: 'product',
      component: function component() {
        return Promise.resolve().then(function () {
          return _interopRequireWildcard(require('./pages/product.vue'));
        });
      }
    }, {
      path: '/detail/:id',
      name: 'detail',
      component: function component() {
        return Promise.resolve().then(function () {
          return _interopRequireWildcard(require('./pages/detail.vue'));
        });
      }
    }]
  }, {
    path: '/login',
    name: 'login',
    component: function component() {
      return Promise.resolve().then(function () {
        return _interopRequireWildcard(require('./pages/login.vue'));
      });
    }
  }, {
    path: '/cart',
    name: 'cart',
    component: function component() {
      return Promise.resolve().then(function () {
        return _interopRequireWildcard(require('./pages/cart.vue'));
      });
    }
  }, {
    path: '/order',
    name: 'order',
    component: function component() {
      return Promise.resolve().then(function () {
        return _interopRequireWildcard(require('./pages/order.vue'));
      });
    },
    children: [{
      path: 'list',
      name: 'order-list',
      component: function component() {
        return Promise.resolve().then(function () {
          return _interopRequireWildcard(require('./pages/orderList.vue'));
        });
      }
    }, {
      path: 'confirm',
      name: 'order-confirm',
      component: function component() {
        return Promise.resolve().then(function () {
          return _interopRequireWildcard(require('./pages/orderConfirm.vue'));
        });
      }
    }, {
      path: 'pay',
      name: 'order-pay',
      component: function component() {
        return Promise.resolve().then(function () {
          return _interopRequireWildcard(require('./pages/orderPay.vue'));
        });
      }
    }, {
      path: 'alipay',
      name: 'alipay',
      component: function component() {
        return Promise.resolve().then(function () {
          return _interopRequireWildcard(require('./pages/alipay.vue'));
        });
      }
    }]
  }]
});

exports["default"] = _default;