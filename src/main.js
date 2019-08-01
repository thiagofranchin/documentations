import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import VueHighlightJS from 'vue-highlightjs'
import './plugins/fontawesome'
import './plugins/bootstrap-vue'
// eslint-disable-next-line no-unused-vars
import TweenMax from 'gsap'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'

Vue.config.productionTip = false
Vue.use(VueHighlightJS, TweenMax)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
