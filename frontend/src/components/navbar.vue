<template lang="html">
<nav class="nav has-shadow">
  <div class="container">
    <div class="nav-left">

      <router-link class="nav-item" to="/">
        <!-- <img src="#" alt="Capacity logo"> -->
        <h1 class="title has-text-centered is-large">Capacity</h1>
      </router-link>
    </div>

    <!-- This "nav-toggle" hamburger menu is only visible on mobile -->
    <!-- You need JavaScript to toggle the "is-active" class on "nav-menu" -->
    <span class="nav-toggle" v-on:click="toggleMenu">
      <span></span>
      <span></span>
      <span></span>
    </span>

    <!-- This "nav-menu" is hidden on mobile -->
    <!-- Add the modifier "is-active" to display it on mobile -->
    <transition name="fade">
      <div class="nav-right nav-menu" v-bind:class="{ 'is-active': menu_open }">
        <a class="nav-item">
          About
        </a>
        <a class="nav-item">
          Account
        </a>

        <span class="nav-item">
          <a class="button" >
            <span class="icon">
              <i class="fa fa-user-plus"></i>
            </span>
            <span>Sign up</span>
          </a>
          <a class="button is-primary">
            <span class="icon">
              <i class="fa fa-user"></i>
            </span>
            <span>Log in</span>
          </a>
        </span>
      </div>
    </transition>
  </div>
</nav>
</template>

<!-- For each button, we will have a modal (preferably seperate components) -->
<script>
export default {
  name: 'navbar',
  data: function () {
    return {
      menu_open: true
    }
  },
  methods: {
    toggleMenu: function () {
      this.menu_open = !this.menu_open;
    }
  }
}
</script>