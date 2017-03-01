<template lang="html">
<transition name="fade">
<div class="modal is-active" v-if="visible">
  <div class="modal-background" v-on:click="closeModal"></div>
  <div class="modal-content">
    <div class="box">
      <div class="content">
        <h1>Sign Up</h1>
        <p>This will contain the signup flow</p>
      </div>
    </div>
  </div>
  <button class="modal-close" v-on:click="closeModal"></button>
</div>
</transition>
</template>

<script>
export default {
  name: 'nav_signup',
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