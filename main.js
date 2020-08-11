import Vue from 'vue'
import App from './App'

import store from '@/store/index.js'

// 引入uView提供的对vuex的简写法文件
let vuexStore = require('@/store/mixin.js')
Vue.mixin(vuexStore)

import uView from "uview-ui";
Vue.use(uView);

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
	store,
    ...App
})
app.$mount()
