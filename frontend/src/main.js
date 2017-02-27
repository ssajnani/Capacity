import Vue from 'vue'
import router from './router'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template:`
  <transition name="fade">
  <router-view></router-view>
  </transition>
  `,
  router
})
