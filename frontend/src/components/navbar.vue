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
      <div class="nav-right nav-menu" v-bind:class="{ 'is-active': menu_open }">
        <a class="nav-item" v-on:click="openModal('about')">
          About
        </a>
        <a class="nav-item" v-on:click="openModal('account')">
          Account
        </a>

        <span class="nav-item">
          <a class="button" v-on:click="openModal('signup')">
            <span class="icon">
              <i class="fa fa-user-plus"></i>
            </span>
            <span>Sign up</span>
          </a>
          <a class="button is-primary" v-on:click="openModal('login')">
            <span class="icon">
              <i class="fa fa-user"></i>
            </span>
            <span>Log in</span>
          </a>
        </span>
      </div>
    <nav_about :visible="modals.about" v-on:closeModal="closeModal('about')"></nav_about>
    <nav_account :visible="modals.account" v-on:closeModal="closeModal('account')"></nav_account>
    <nav_login :visible="modals.login" v-on:closeModal="closeModal('login')"></nav_login>
    <nav_signup :visible="modals.signup" v-on:closeModal="closeModal('signup')"></nav_signup>
  </div>
</nav>
</template>

<!-- For each button, we will have a modal (preferably seperate components) -->
<script>
import nav_about from '../components/navmodals/nav_about.vue'
import nav_account from '../components/navmodals/nav_account.vue'
import nav_signup from '../components/navmodals/nav_signup.vue'
import nav_login from '../components/navmodals/nav_login.vue'

export default {
  name: 'navbar',
  components: {
    nav_about,
    nav_account,
    nav_signup,
    nav_login
  },
  data: function () {
    return {
      menu_open: false,
      modals:{
        about: false,
        account: false,
        signup: false,
        login: false
      }
    }
  },
  methods: {
    toggleMenu: function () {
      this.menu_open = !this.menu_open;
    },
    openModal: function (name) {
      this.modals[name] = true;
    },
    closeModal: function (name) {
      this.modals[name] = false;
    }
  },
  created: function () {

  }
}
</script>

<style type="text/css">
.fade-enter-active, .fade-leave-active {
  transition: opacity .2s ease;
}
.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
  opacity: 0;
}
</style>