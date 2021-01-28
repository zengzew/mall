"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

/**
 * 商城Vuex-mutations
 */
var _default = {
  saveUserName: function saveUserName(state, username) {
    state.username = username;
  },
  saveCartCount: function saveCartCount(state, count) {
    state.cartCount = count;
  }
};
exports["default"] = _default;