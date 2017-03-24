<!-- Component for the signup modal -->

<template lang="html">
<transition name="fade">
<div class="modal is-active" v-if="visible">
  <div class="modal-background" v-on:click="closeModal"></div>
  <div class="modal-content">
    <div class="box">
      <div class="content has-text-left">
        <h1 class="has-text-centered">Sign Up for Capacity</h1>

        <p class="control has-icon has-icon-right">
          <input class="input" type="text" v-model="username" placeholder="Username">
        </p>

        <p class="control has-icon has-icon-right">
          <input class="input" type="password" v-model="password" placeholder="Password">
        </p>

        <div class="control is-grouped">
          <p class="control">
            <button class="button is-primary" v-on:click="signUp" v-bind:class="{'is-loading': is_submitting, 'is-disabled': invalidFields}">Sign Up</button>
          </p>
          <p class="control">
            <button class="button is-link" v-on:click="closeModal">Cancel</button>
          </p>
        </div>

      </div>
    </div>
  </div>
  <button class="modal-close" v-on:click="closeModal"></button>
</div>
</transition>
</template>

<style scoped>
.input {
  max-width: 400px
}
.control {
  text-align: center;
  align-items: center;
  justify-content: center;
}
</style>

<script>

import auth from '../../auth'

export default {
  name: 'nav_signup',
  props: ['visible'],
  data: function () {
    return {
      username: '',
      password: '',
      is_submitting: false
    }
  },
  computed: {
    invalidFields: function () {
      return !(this.username && this.password);
    }
  },
  methods: {
    closeModal: function () {
      this.username = '';
      this.password = '';
      this.is_submitting = false;
      this.$emit('closeModal');
    },
    signUp: function () {
      this.is_submitting = true;

      auth.signup(this, {username:this.username, password:this.password},
        success => {
          console.log(success);
          this.closeModal();
            alert("You've successfully signed up! Please login.");
        }, error => {
          console.log(error);
          this.closeModal();
          alert(error.body.message);
        });
    }
  }
}
</script>