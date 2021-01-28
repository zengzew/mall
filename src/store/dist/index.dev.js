"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vue = _interopRequireDefault(require("vue"));

var _vuex = _interopRequireDefault(require("vuex"));

var _mutations = _interopRequireDefault(require("./mutations"));

var _action = _interopRequireDefault(require("./action"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_vue["default"].use(_vuex["default"]); //定义状态


var state = {
  username: '',
  //登录用0
  cartCount: 0 //购物车商品数量

};

var _default = new _vuex["default"].Store({
  state: state,
  mutations: _mutations["default"],
  actions: _action["default"]
});

exports["default"] = _default;