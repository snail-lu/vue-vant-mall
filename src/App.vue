<template>
	<div id="app">
		<router-view></router-view>
	</div>
</template>

<script>
export default {
	name: 'App',
	components: {},
	methods: {
		test() {
			const a = 'test'
			console.log(a)
		}
	}
}
</script>

<style>
html,
body {
	height: 100%;
}
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	color: #2c3e50;
	background-color: #f5f5f5;
	height: 100%;
}
</style>
