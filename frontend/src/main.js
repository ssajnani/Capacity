import Vue from 'vue'
import router from './router'

/* Components */
import navbar from './components/navbar.vue'

/* eslint-disable no-new */
new Vue({
  el: '#app',

  template: `
  <div>
    <navbar></navbar>
    <section class="section">
      <div class="container">
        <router-view></router-view>
      </div>
    </section>
  </div>
  `,
  router,
  components: {
    navbar
  }
})
