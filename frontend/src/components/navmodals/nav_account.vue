<!-- The modal which will store the account information -->

<template lang="html">
<transition name="fade">
<div class="modal is-active" v-if="visible">
  <div class="modal-background" v-on:click="closeModal"></div>
  <div class="modal-content">
    <div class="box">
      <div class="content">
        <h1>Account Info</h1>
        <p>The user will be able to view and manage their account and settings here.</p>
      </div>
    </div>
  </div>
  <button class="modal-close" v-on:click="closeModal"></button>
</div>
</transition>
</template>

<script>
export default {
  name: 'nav_account',
  props: ['visible'],
  data: function () {
    return {
      
    }
  },
  created: function () {

  },
  methods: {
    closeModal: function () {
      this.$emit('closeModal');
    }
  }
}
</script>