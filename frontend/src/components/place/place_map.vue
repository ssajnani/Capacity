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
  props: ['coords', 'name', 'rating', 'website', 'phone', 'type', ],
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
        streetViewControl: false,
        mapTypeControl: false,
        zoom: 14,
        maxZoom: 17,
        minZoom: 11,
        styles: [
          {
            "featureType": "administrative",
            "elementType": "all",
            "stylers": [
              {
                "visibility": "off"
              }
            ]
          },
          {
            "featureType": "landscape",
            "elementType": "all",
            "stylers": [
              {
                "visibility": "simplified"
              },
              {
                "hue": "#0066ff"
              },
              {
                "saturation": 74
              },
              {
                "lightness": 100
              }
            ]
          },
          {
            "featureType": "poi",
            "elementType": "labels.icon",
            "stylers": [
              {
                "visibility": "off"
              }
            ]
          },
          {
            "featureType": "road",
            "elementType": "all",
            "stylers": [
              {
                "visibility": "simplified"
              }
            ]
          },
          {
            "featureType": "road.highway",
            "elementType": "all",
            "stylers": [
              {
                "visibility": "off"
              },
              {
                "weight": 0.6
              },
              {
                "saturation": -85
              },
              {
                "lightness": 61
              }
            ]
          },
          {
            "featureType": "road.highway",
            "elementType": "geometry",
            "stylers": [
              {
                "visibility": "on"
              }
            ]
          },
          {
            "featureType": "road.arterial",
            "elementType": "all",
            "stylers": [
              {
                "visibility": "simplified"
              }
            ]
          },
          {
            "featureType": "road.local",
            "elementType": "all",
            "stylers": [
              {
                "visibility": "simplified"
              }
            ]
          },
          {
            "featureType": "transit",
            "elementType": "all",
            "stylers": [
              {
                "visibility": "simplified"
              }
            ]
          },
          {
            "featureType": "water",
            "elementType": "all",
            "stylers": [
              {
                "visibility": "simplified"
              },
              {
                "color": "#5f94ff"
              },
              {
                "lightness": 26
              },
              {
                "gamma": 5.86
              }
            ]
          }
        ]
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