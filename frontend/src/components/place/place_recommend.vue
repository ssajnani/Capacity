<template lang="html">
<div>
<!-- If mobile, has-text-centered -->
<h1 class="title">Suggested Places</h1>

<!-- SUGGESTED PLACE OBJECT -->
<!-- REPEAT FOR EVERY SUGGESTED PLACE IN ARRAY -->
<a class="media" v-for="place in filtered" v-on:click="goTo(place.place_id)">
  <figure class="media-left">
      <p class="image is-64x64">
        <img v-bind:src="place.photos[0].getUrl({maxWidth:128, maxHeight:128})">
      </p>
  </figure>
  <div class="media-content">
      <div class="content">
        <p>
          <strong> {{place.name}}</strong>
          {{place.location}}<br>
          <!-- Change this to stars -->
          <em>Rating: {{place.rating}}</em>
        </p>
      </div>
  </div>
</a>
<p v-if="!filtered.size">
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
export default {
  name: 'place_recommend',
  props: ['recommendations'],
  
  computed: {
      filtered: function(){

       if(this.recommendations == null) {
        return [];
      }
      else{
        return this.recommendations.slice(0,5);
      }
    },
  },
  methods: {
    goTo: function(id){
      console.log(id);

      this.$emit("goToPlace", id);
    }
  }
}
</script>