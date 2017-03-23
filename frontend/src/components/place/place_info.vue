<template lang="html">
 <!-- Name, Rating, Descriptions, w/e -->
<div class="card-content">
  <p class="title is-3">{{ name }}</p>
  <p class="subtitle is-6">{{ address }}</p>
  <p><em>Rating</em></p>
  <a class="button is-black" v-on:click="checkIn()"> Check In</a>
</div>
</template>

<script>
import auth from '../../auth'

export default {
  name: 'place_info',
  props: ['name', 'address'],
  data: function () {
    return {
    }
  },
  methods: {
    checkIn: function(){
      this.$emit('checkIn');
    }
  }
}
</script>