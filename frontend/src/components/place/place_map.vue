<template lang="html">
<div class="card">
        
  <!-- Google Maps -->
  <div class="card-image">
    <div id="map"></div>
    <figure class="image is-4by2">
      <img src="http://bulma.io/images/placeholders/640x360.png" alt="Image">
    </figure>
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
      location: function () {
        return this.coords;
      }
    };
  },
  created: function () {
    this.location = {lat: -25.363, lng: 131.044};
    var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 4,
    center: this.location
    });
    var marker = new google.maps.Marker({
    position: this.location,
    map: map
    });
  },
  methods: {

  }
}
</script>