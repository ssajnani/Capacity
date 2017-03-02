<template lang="html">
<transition name="fade">
<div class="modal is-active" v-if="visible">
  <div class="modal-background" v-on:click="closeModal"></div>
  <div class="modal-content">
    <div class="box">
      <div class="content">
        <h1>About Capacity</h1>
        <p class="has-text-left">
          Our web-based application, currently named Capacity, is a tool that will help you save time by giving you the information you wish you had before getting to your destination. Capacity will report information on wait times, crowd sizes, seat availability, and more. 
          <br><br>
          This information is recorded interactively, by allowing users to self-report data with incentives from the destinations they are visiting. The self-reported data can be self-moderated, by allowing other users to comment and vote on the reliability of the information. Furthermore, crowd sizes can also be determined with data collected from location services as permitted by the user.
        </p>
        <a href="https://ssajnani.github.io/Capacity/homepage">
          Visit our project website!
        </a>
      </div>
    </div>
  </div>
  <button class="modal-close" v-on:click="closeModal"></button>
</div>
</transition>
</template>

<script>
export default {
  name: 'nav_about',
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