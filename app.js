import Vue from '/web_modules/vue/dist/vue.esm.browser.js';
import httpVueLoader from '/web_modules/http-vue-loader/src/httpVueLoader.js';

// Vue.use(httpVueLoader);

new Vue({
	el: '#app',
	components: {
		'app': httpVueLoader('src/App.vue')
	}
});