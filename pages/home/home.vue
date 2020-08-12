<template>
	<view class="u-page">
		<u-navbar ref="navbar" :is-back="false" :title="vuex_tabbar[0].text" :title-color="'#ffffff'" :background="{backgroundColor:'#00aaff'}"></u-navbar>
		<view class="content">
			<u-tabs ref="tabs" :list="list" :is-scroll="false" :current="current" @change="tabsChange" :bg-color="'#ffffff'"></u-tabs>
			<scroll-view scroll-y :style="[{height:`calc(100vh - (${statusBarHeight + navbarHeight + tabbarHeight}px) - ${tabsHeight}rpx)`}]">
				<view class="u-card-wrap">
					<u-card :title="title" :sub-title="subTitle" :thumb="thumb" :border-radius="0">
						<view class="" slot="body">
							<view class="u-body-item u-flex u-row-between u-p-b-0">
								<view class="u-body-item-title u-line-2">釉色渲染仕女图韵味被私藏，而你嫣然的一笑如含苞待放</view>
								<image src="https://img12.360buyimg.com/n7/jfs/t1/102191/19/9072/330688/5e0af7cfE17698872/c91c00d713bf729a.jpg" mode="aspectFill"></image>
							</view>
						</view>
						<view class="" slot="foot"><u-icon name="chat-fill" size="34" color="" label="30评论"></u-icon></view>
					</u-card>
					<u-card :title="title" :sub-title="subTitle" :thumb="thumb" :border-radius="0">
						<view class="" slot="body">
							<view class="u-body-item u-flex u-row-between u-p-b-0">
								<view class="u-body-item-title u-line-2">釉色渲染仕女图韵味被私藏，而你嫣然的一笑如含苞待放</view>
								<image src="https://img12.360buyimg.com/n7/jfs/t1/102191/19/9072/330688/5e0af7cfE17698872/c91c00d713bf729a.jpg" mode="aspectFill"></image>
							</view>
						</view>
						<view class="" slot="foot"><u-icon name="chat-fill" size="34" color="" label="30评论"></u-icon></view>
					</u-card>
					<u-card :title="title" :sub-title="subTitle" :thumb="thumb" :border-radius="0">
						<view class="" slot="body">
							<view class="u-body-item u-flex u-row-between u-p-b-0">
								<view class="u-body-item-title u-line-2">釉色渲染仕女图韵味被私藏，而你嫣然的一笑如含苞待放</view>
								<image src="https://img12.360buyimg.com/n7/jfs/t1/102191/19/9072/330688/5e0af7cfE17698872/c91c00d713bf729a.jpg" mode="aspectFill"></image>
							</view>
						</view>
						<view class="" slot="foot"><u-icon name="chat-fill" size="34" color="" label="30评论"></u-icon></view>
					</u-card>
				</view>
			</scroll-view>
		</view>
		<u-tabbar ref="tabbar" :list="vuex_tabbar" :active-color="'#ff557f'"></u-tabbar>
	</view>
</template>

<script>
	export default{
		data() {
			return {
				tabsHeight: 0,
				tabbarHeight: 0,
				navbarHeight: 0,
				statusBarHeight: 0,
				title: '素胚勾勒出青花，笔锋浓转淡',
				subTitle: '2020-05-15',
				thumb: 'http://pic2.sc.chinaz.com/Files/pic/pic9/202002/hpic2119_s.jpg',
				list: [{
					name: '关注'
				}, {
					name: '热门'
				}, {
					name: '主机',
				},{
					name: '手游'
				},{
					name: '网游'
				},{
					name: '页游'
				}],
				current: 0
			}
		},
		onReady() {
			this.$nextTick(()=>{
				const { statusBarHeight, navbarHeight} = this.$refs.navbar;
				statusBarHeight ? this.statusBarHeight = statusBarHeight : this.statusBarHeight = 0;
				navbarHeight ? this.navbarHeight = navbarHeight : this.navbarHeight = 0;
				this.$refs.tabs.height ? this.tabsHeight = this.$refs.tabs.height : this.tabsHeight = 0;
				this.$refs.tabbar.height ? this.tabbarHeight = Number(this.$refs.tabbar.height.replace('px','')): this.tabbarHeight = 0;
			})
		},
		methods:{
			tabsChange(index){
				this.current = index;
			}
		}
	}
</script>

<style lang="scss" scoped>
	.content {
		background-color: #f7f7f7;
	}
	
	.content .tabs-bar {
		position: fixed;
		top: 50;
	}
	
	.u-card-wrap { 
		background-color: $u-bg-color;
		padding: 1px;
	}
		
	.u-body-item {
		font-size: 32rpx;
		color: #333;
		padding: 20rpx 10rpx;
	}
		
	.u-body-item image {
		width: 120rpx;
		flex: 0 0 120rpx;
		height: 120rpx;
		border-radius: 8rpx;
		margin-left: 12rpx;
	}
</style>
