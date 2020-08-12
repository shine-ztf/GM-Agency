<template>
	<view class="u-page">
		<u-navbar :is-back="false" :title="vuex_tabbar[1].text" :title-color="'#ffffff'" :background="{backgroundColor:'#00aaff'}"></u-navbar>
		<view class="content">
			game
		</view>
		<u-tabbar :list="vuex_tabbar" :active-color="'#ff557f'"></u-tabbar>
	</view>
</template>

<script>
	export default{
		data() {
			return {
				
			}
		}
	}
</script>

<style>
</style>
