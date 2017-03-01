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
      this.location = {lat: 43.0096, lng: -81.2737};
      // Coords of UWO 43.0096° N, 81.2737° W
      this.map = new google.maps.Map(document.getElementById('map'), {
        center: this.location,
        scrollwheel: true,
        zoom: 14
      });
      var marker = new google.maps.Marker({
        position: this.location,
        map: this.map
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