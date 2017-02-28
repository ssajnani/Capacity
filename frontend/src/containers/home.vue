<template lang="html">
<div id="home">
<section class="hero is-fullheight">
  <div class="hero-head"><navbar></navbar></div>
  <div class="hero-body">
    <div class="container">
      <h1 class="title">
        Search
      </h1>
      <div class="columns">
        <div class="column is-5">
          <div class="control has-icon has-icon-right">
            <input class="input is-large" type="text" placeholder="Libraries, bars, stores...">
            <span class="icon is-small">
              <i class="fa fa-search"></i>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
</div>
</template>

<script>
import navbar from '../components/navbar.vue'

export default {
  name: 'home',
  components: {
    navbar
  }
}
</script>