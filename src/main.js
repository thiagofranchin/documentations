import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import VueHighlightJS from 'vue-highlightjs'
import './plugins/fontawesome'
import './plugins/bootstrap-vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'

Vue.config.productionTip = false
Vue.use(VueHighlightJS)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
