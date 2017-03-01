<template lang="html">
<div class="card">
        
  <!-- Google Maps -->
  <div class="card-image">
    <div id="map"></div>
  </div>

  <!-- Name, Rating, Descriptions, w/e -->
  <div class="card-content">
    <p class="title is-3">Western University</p>
    <p class="subtitle is-6">London, ON<!-- location --> <em>5/5</em></p>
  </div>

</div>
</template>

<script>
export default {
  name: 'place_map',
  props: ['coords', 'name', 'rating', 'desc'],
  data: function () {
    return {
      // location: function () {
      //   return this.coords;
      // }
    };
  },
  methods: {
    initMap: function() {
      this.map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 83.9207, lng: 35.9565},
        scrollwheel: false,
        zoom: 4
      });
    }
  },
  mounted: function() {
    this.initMap();
  }
}
</script>

<style>
  #map {
    height: 500px;
    width: 100%;
  }
</style>