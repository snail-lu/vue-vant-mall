import Vue from 'vue'
import App from './App.vue'
import { Get, Post } from './utils/request'
import router from './router'
import vant from './components/Vant/index'
import infiniteScroll from 'vue-infinite-scroll'
import './assets/iconfont/iconfont.css'
import mixin from './mixins/index'

// 批量注册vant组件
Vue.use(vant)
// 无限滚动插件
Vue.use(infiniteScroll)

Vue.config.productionTip = false
Vue.prototype.$http = { Get, Post }

// 全局混入
Vue.mixin(mixin)

export default new Vue({
	router,
	render: (h) => h(App)
}).$mount('#app')
