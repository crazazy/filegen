import { Vue } from '../web_modules/vue-property-decorator.js';
import httpVueLoader from '../web_modules/http-vue-loader/src/httpVueLoader.js'

// httpVueLoader.register(Vue, './App.vue')


new Vue({
	render: (h) => h(httpVueLoader('./App.vue'))
}).$mount('#app')
