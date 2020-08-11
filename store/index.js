import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const store = new Vuex.Store({
	strict:true,
	state:{
		vuex_user: {name: '张三', avatar: ''},
		vuex_token: '',
		vuex_version: '1.0.0',
		// 自定义tabbar数据
		vuex_tabbar: [{
						iconPath: "home",
						selectedIconPath: "home-fill",
						text: '社区',
						customIcon: false,
						pagePath: '/pages/home/home',
					},
					{
						iconPath: "photo",
						selectedIconPath: "photo-fill",
						text: '游戏',
						customIcon: false,
						pagePath: '/pages/game/game', 
					},
					{
						iconPath: "account",
						selectedIconPath: "account-fill",
						text: '我的',
						customIcon: false,
						pagePath: '/pages/person/person', 
					},
				]
	},
	mutations:{},
	actions:{},
	getters:{},
})

export default store;