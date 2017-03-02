<template lang="html">
<div class="card">
        
  <!-- Google Maps -->
  <div class="card-image">
    <div id="map"></div>
  </div>

  <!-- Name, Rating, Descriptions, w/e -->
  <div class="card-content">
    <p class="title is-3">Western University</p>
    <!-- location --> 
    <p class="subtitle is-6">London, ON <em>5/5</em></p>
  </div>

</div>
</template>

<script>
export default {
  name: 'place_map',
  props: ['coords', 'name', 'rating', 'type', 'website', 'phone'],
  data: function () {
    return {
      // location: function () {
      //   return this.coords;
      // }
    };
  },
  methods: {
    initMap: function() {

      // Placeholder for searched item
      // Coords of UWO 43.0096° N, 81.2737° W
      this.location = {lat: 43.0096, lng: -81.2737};

      this.map = new google.maps.Map(document.getElementById('map'), {
        center: this.location,
        // Google Map options, no changing to satellite or street view
        mapTypeControl: false,
        streetViewControl: false,
        // Zoom parameters, these are the most comfortable options I found
        zoom: 14,
        maxZoom: 17,
        minZoom: 11,
        // Styling for the Google Map, can be changed as necessary
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

      // Custom marker icons
      // var mainMarker = 'https://image.flaticon.com/icons/png/128/179/179386.png'
      // var suggestedMarker = 'http://findicons.com/files/icons/1963/colorcons_blue/128/questionmark.png';

      // Marker sizes are expressed as a Size of X,Y where the origin of the image
      // (0,0) is located in the top left of the image.
      // Origins, anchor positions and coordinates of the marker increase in the X
      // direction to the right and in the Y direction down.
      // var image = {
      //   url: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
      //   // This marker is 20 pixels wide by 32 pixels high.
      //   size: new google.maps.Size(20, 32),
      //   // The origin for this image is (0, 0).
      //   origin: new google.maps.Point(0, 0),
      //   // The anchor for this image is the base of the flagpole at (0, 32).
      //   anchor: new google.maps.Point(0, 32)
      // };

      // Main marker dropped
      var mainMarker = new google.maps.Marker({
        position: this.location,
        map: this.map,
        animation: google.maps.Animation.DROP,
        // icon: mainMarker
      });

      // More placeholders for marker drop, represents suggested locations
      // King Richie's 43.0082° N, 81.2606° W
      // Saugeen-Maitland Hall 43.0115° N, 81.2793° W
      // 7/11 43.0016° N, 81.2768° W
      var suggestedLocations = [
        {lat: 43.0082, lng: -81.2606},
        {lat: 43.0115, lng: -81.2793},
        {lat: 43.0016, lng: -81.2768}
      ];

      // Labels for markers on map, labels can be ABCDEFGHI... as well
      var labels = '123456789';
      var labelIndex = 0; 

      // This function was made to add the suggested markers
      function addMarkerWithTimeout(location, map, timeout) {
        setTimeout(function(){ 
          var newMarker = new google.maps.Marker({
            position: location,
            map: map,
            animation: google.maps.Animation.DROP,
            label: labels[labelIndex++ % labels.length],
            // icon: suggestedMarker
          });
        }, timeout);
      };

      // To add suggested markers, i values are adjusted for drop time against mainMarker
      for (var i = 1; i <= suggestedLocations.length; i++) {
        addMarkerWithTimeout(suggestedLocations[i-1], this.map, i * 200);
      };
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