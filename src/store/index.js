import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './action'
Vue.use(Vuex);

//定义状态
const state = {
    username: '',//登录用0
    cartCount: 0//购物车商品数量
}
export default new Vuex.Store({
    state,
    mutations,
    actions
});