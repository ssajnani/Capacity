<template lang="html">
<div>
<!-- If mobile, has-text-centered -->
<h1 class="title">Suggested Places</h1>

<!-- SUGGESTED PLACE OBJECT -->
<!-- REPEAT FOR EVERY SUGGESTED PLACE IN ARRAY -->
<a class="media" v-for="place in filtered_recommendations" v-on:click="goTo(place.place_id)">
  <figure class="media-left">
      <p class="image is-64x64">
        <img v-bind:src="place.photos[0].getUrl({maxWidth:128, maxHeight:128})">
      </p>
  </figure>
  <div class="media-content">
      <div class="content">
        <p>
          <strong> {{place.name}}</strong>
          <br>
          {{place.vicinity}}
          <br>
          <place_rating :rating="place.rating"></place_rating>
        </p>
      </div>
  </div>
</a>
<p v-if="!filtered_recommendations || !filtered_recommendations.length">
  (No suggestions available...)
</p>
</div>
</template>

<style scoped>
.image img{
  width: 64px;
  height: 64px;
  border-radius: 50%;
}

p {
  font-style: italic; 
}
</style>

<script>
import place_rating from './place_rating.vue'
export default {
  name: 'place_recommend',
  props: ['recommendations'],
  components: {
    place_rating,
  },
  data: function () {
    return {
      filtered_recommendations: [],
      rating: null,
    };
  },
  methods: {
    goTo: function(id){
      console.log(id);

      this.$emit("goToPlace", id);
    },
  },
  watch: {
    recommendations: function (to) {
      if (to == null) {
        this.filtered_recommendations = [];
      }
      else{
        this.filtered_recommendations = to.slice(0,5);
      }
    },
  },
}
</script>