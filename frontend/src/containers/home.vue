<template lang="html">
<div id="home">
<section class="hero is-fullheight">
  <div class="hero-head"><navbar></navbar></div>
  <div class="hero-body">
    <div class="container">
      <h1 class="title">
        Find a place
      </h1>
      <div class="columns">
        <div class="column is-5">
          <div class="control has-icon has-icon-right">
            <input class="input is-large" type="text"> 
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- <div class="hero-foot"><footerbar></footerbar></div> -->
</section>
</div>
</template>

<script>
import navbar from '../components/navbar.vue'
// import footerbar from '../components/footer.vue'

export default {
  name: 'home',
  components: {
    navbar
  }
}
</script>