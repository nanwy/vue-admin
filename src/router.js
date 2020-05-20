import Vue from 'vue'
import Router from 'vue-router'
import routes from './common/config/router.js'

Vue.use(Router)

export default new Router({
  routes
})

const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
