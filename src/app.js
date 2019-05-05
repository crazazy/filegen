import Vue from '../web_modules/vue.js'
import httpVueLoader from '../web_modules/http-vue-loader/src/httpVueLoader.js'

new Vue({
	render: (h) => h('div', httpVueLoader('./App.vue'))
}).$mount('#app')
