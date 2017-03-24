<template lang="html">
  <!-- Name, Rating, Descriptions, w/e -->
  <div>
    <p class="title is-3">{{ name }}</p>
    <p class="subtitle is-6">{{ address }}</p>
    <p>Rating {{ rating }}</p>
    <br>
  </div>
</template>

<script>
import auth from '../../auth'

export default {
  name: 'place_info',
  props: ['name', 'address', 'rating'],
  data: function () {
    return {
    }
  },
  methods: {
    starRating: function() {
      // Convert number into stars
    }
  }
}
</script>