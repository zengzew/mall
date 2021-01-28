"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

/**
 * 商城Vuex-actions
 */
var _default = {
  saveUserName: function saveUserName(context, username) {
    context.commit('saveUserName', username);
  },
  saveCartCount: function saveCartCount(context, count) {
    context.commit('saveCartCount', count);
  }
};
exports["default"] = _default;