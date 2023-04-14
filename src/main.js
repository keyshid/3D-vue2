import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import VueThreeSixty from 'vue-360'
import 'vue-360/dist/css/style.css'
Vue.use(VueThreeSixty)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
