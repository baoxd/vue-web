import Vue from 'vue'
import App from './App'
import axios from 'axios'
import routes from './routes'
import VueRouter from 'vue-router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'

Vue.use(ElementUI)
Vue.prototype.$axios = axios
Vue.use(VueRouter)

const router = new VueRouter({routes: routes})

router.beforeEach((to, from, next) => {
	console.log('路由跳转-----before')
	next()
})

router.afterEach((to, from) => {
	console.log('路由跳转-----after')
})

new Vue({
	router: router,
	// vue 默认是运行时构建
	render: h => h(App)
	// template: '<App/>',
 	// components: { App }
}).$mount('#app')