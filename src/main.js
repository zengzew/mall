import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import router from './router'
import VueLazyLoad from 'vue-lazyload'
//import env from './env'


//mock开关
const mock = true;
if (mock) {
  require('./mock/api');//import是预加载，require是运行到加载
}
//根据前端的跨域方式作调整
axios.defaults.baseURL = '/api';
axios.defaults.timeout = 8000;
//根据环境变量获取不同的请求地址
//axios.default.baseURL = env.baseURL;
//接口错误拦截
axios.interceptors.response.use(function (response) {
  let res = response.data;//获取接口返回值
  if (res.status == 0) {
    return res.data;
  } else if (res.status == 10) {
    window.location.href = '/#/login';
  } else {
    alert(res.msg);
  }
});


Vue.use(VueAxios, axios);
Vue.config.productionTip = false
Vue.use(VueLazyLoad, {
  loading: '/imgs/loading-svg/loading-bars.svg'
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
