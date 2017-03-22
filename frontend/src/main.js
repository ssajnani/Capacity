import Vue from 'vue'
import router from './router'
import auth from './auth'
import resource from 'vue-resource'

/* eslint-disable no-new */

Vue.use(resource)

/* Initializes the Vue object */
/* Depending on the url, the <router-view> will display different containers */
/* Check ./router.js for the routes */
new Vue({
  el: '#app',
  template:`
  <transition name="fade">
	  <router-view></router-view>
  </transition>
  `,
  router,

  mounted: function () {
  	auth.checkAuth();
  }
})
