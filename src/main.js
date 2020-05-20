import Vue from 'vue'
import App from './App.vue'
import './plugins/element.js'
import router from './router.js'
//引入全局
import $conf from 'common/config/config.js'
Vue.prototype.$conf = $conf

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
