"use strict";

var _vue = _interopRequireDefault(require("vue"));

var _router = _interopRequireDefault(require("./router"));

var _axios = _interopRequireDefault(require("axios"));

var _vueAxios = _interopRequireDefault(require("vue-axios"));

var _vueLazyload = _interopRequireDefault(require("vue-lazyload"));

var _vueCookie = _interopRequireDefault(require("vue-cookie"));

var _elementUi = require("element-ui");

require("element-ui/lib/theme-chalk/index.css");

var _store = _interopRequireDefault(require("./store"));

var _App = _interopRequireDefault(require("./App.vue"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// import env from './env'
// mock开关
var mock = false;

if (mock) {
  require('./mock/api');
} // 根据前端的跨域方式做调整 /a/b : /api/a/b => /a/b
// axios.defaults.baseURL = 'https://www.easy-mock.com/mock/5dc7afee2b69d9223b633cbb/mimall';


_axios["default"].defaults.baseURL = '/api';
_axios["default"].defaults.timeout = 8000; // 根据环境变量获取不同的请求地址
// axios.defaults.baseURL = env.baseURL;
// 接口错误拦截

_axios["default"].interceptors.response.use(function (response) {
  var res = response.data;

  if (res.status == 0) {
    return res.data;
  } else if (res.status == 10) {
    window.location.href = '/#/login';
    return Promise.reject(res);
  } else {
    _elementUi.Message.warning(res.msg);

    return Promise.reject(res);
  }
}, function (error) {
  var res = error.response;

  _elementUi.Message.error(res.data.message);

  return Promise.reject(error);
});

_vue["default"].use(_vueAxios["default"], _axios["default"]);

_vue["default"].use(_vueCookie["default"]);

_vue["default"].use(_vueLazyload["default"], {
  loading: '/imgs/loading-svg/loading-bars.svg'
});

_vue["default"].prototype.$message = _elementUi.Message;
_vue["default"].config.productionTip = false;
new _vue["default"]({
  store: _store["default"],
  router: _router["default"],
  render: function render(h) {
    return h(_App["default"]);
  }
}).$mount('#app');