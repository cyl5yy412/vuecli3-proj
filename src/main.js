import Vue from 'vue'
import App from './App.vue'
import router from './router'
// 引入 axios
import axios from 'axios'

// 再全局注册 axios, 以后使用就用 $http 来使用axios
Vue.prototype.$http=axios
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
