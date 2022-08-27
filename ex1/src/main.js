import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuex from './vuex/store'

Vue.config.productionTip = false

new Vue({
  router,
  vuex,
  render: h => h(App)
}).$mount('#app')
