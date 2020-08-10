<template>
	<view>
		<view class="u-page">
			<!-- 所有内容的容器 -->
		</view>
		<!-- 与包裹页面所有内容的元素u-page同级，且在它的下方 -->
		<u-tabbar v-model="current" :list="list"></u-tabbar>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list: [{
						iconPath: "home",
						selectedIconPath: "home-fill",
						text: '首页',
						customIcon: false,
						pagePath: '',
					},
					{
						iconPath: "photo",
						selectedIconPath: "photo-fill",
						text: '放映厅',
						customIcon: false,
						pagePath: '', 
					},
					{
						iconPath: "play-right",
						selectedIconPath: "play-right-fill",
						text: '直播',
						customIcon: false,
						pagePath: '', 
					},
					{
						iconPath: "account",
						selectedIconPath: "account-fill",
						text: '我的',
						customIcon: false,
						pagePath: '', 
					},
				],
				current: 0
			}
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>

<style lang="scss" scoped>
	
</style>
