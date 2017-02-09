import Vue from 'vue'
import Router from 'vue-router'
import Resource from 'vue-resource'

Vue.use(Resource)
Vue.use(Router)

/* Containers */
import home from './containers/home.vue'
import placepage from './containers/placepage.vue'

// application routes
const routes = [
  { path: '/', component: home },
  { path: '/place/:id', component: placepage }
]

// export router instance
export default new Router({
  mode: 'history',
  routes,
  linkActiveClass: 'is-active'
})