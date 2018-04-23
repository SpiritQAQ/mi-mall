// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'
import VueAwesomeSwiper from 'vue-awesome-swiper'
// import LazyLoad from './assets/js/lazyload.js'
import VueLazyLoad from 'vue-lazyload'


Vue.use(Vuex)
Vue.use(VueAwesomeSwiper)
Vue.use(VueLazyLoad,{
  error:'./static/error.png',
  loading:'./static/loading.gif'
})
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
