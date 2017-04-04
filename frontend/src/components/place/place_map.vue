<template lang="html">

<div class="card-image">
  <div id="filters-panel">
  
      <div class="field">
        <a class="button" v-on:click="toggleHeatmap()">Toggle Heatmap</a>
      </div>

    <div class="field">
      <!-- Show/hide other filters -->
      <a class="button" v-on:click="toggleFilters()">Toggle Filters</a>
      <a id="trafficIcon" class="button filter no-display" v-on:click="toggleTraffic()">
        <span class="icon">
          <i class="fa fa-car"></i>
        </span>
      </a>
      <a id="transitIcon" class="button filter no-display" v-on:click="toggleTransit()">
        <span class="icon">
          <i class="fa fa-bus"></i>
        </span>
      </a>
      <a id="bicycleIcon" class="button filter no-display" v-on:click="toggleBicycle()">
        <span class="icon">
          <i class="fa fa-bicycle"></i>
        </span>
      </a>
      <a id="clearIcon" class="button filter no-display" v-on:click="toggleLayerClear()">
        <span class="icon">
          <i class="fa fa-ban"></i>
        </span>
      </a>

    </div>
  </div>
  <div id="map"></div>
</div>
</template>

<style>
  #map {
    height: 400px;
    width: 100%;
  }
  #filters-panel {
    position: absolute;
    z-index: 1;
    padding: 1%;
  }
  .no-display {
    display: none;
  }
</style>

<script>
export default {
  name: 'place_map',
  props: ['coords', 'heatPlaces', 'recommended'],
  data: function () {
    return {
      map: null,
      heatmap: null,
      trafficLayer: null,
      transitLayer: null,
      bikeLayer: null
    };
  },
  methods: {
    toggleHeatmap: function() {
      this.heatmap.setMap(this.heatmap.getMap() ? null : this.map);
    },
    toggleFilters: function() {
      var filters = document.getElementsByClassName("filter");
      for (var i = 0; i < filters.length; i++) {
        filters[i].classList.toggle('no-display');
      }
    },
    toggleLayerClear: function() {
      this.trafficLayer.setMap(null);
      this.transitLayer.setMap(null);
      this.bikeLayer.setMap(null);
      var filters = document.getElementsByClassName("filter");
      for (var i = 0; i < filters.length; i++) {
        filters[i].classList.remove('is-active');
      }
    },
    toggleTraffic: function () {
      this.toggleLayerClear();
      this.trafficLayer.setMap(this.trafficLayer.getMap() ? null : this.map);
      document.getElementById('trafficIcon').classList.add('is-active');
    },
    toggleTransit: function () {
      this.toggleLayerClear();
      this.transitLayer.setMap(this.transitLayer.getMap() ? null : this.map);
      document.getElementById('transitIcon').classList.add('is-active');
    },
    toggleBicycle: function () {
      this.toggleLayerClear();
      this.bikeLayer.setMap(this.bikeLayer.getMap() ? null : this.map);
      document.getElementById('bicycleIcon').classList.add('is-active');
    }, 
    initMap: function() {
      this.location = this.coords;
      // Initialize Google Map
      this.map = new google.maps.Map(document.getElementById('map'), {
        center: this.location,
        mapTypeControl: false,
        // Higher zoom means closer view
        maxZoom: 16,
        zoom:    14,
        minZoom: 12,
        // Styling for the Google Map, can be changed as necessary
        styles: [
          {
            "featureType": "administrative",
            "elementType": "all",
            "stylers": [
              {
                // "visibility": "off"
                "visibility": "on"
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
                // "visibility": "simplified"
                "visibility": "on"
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
                // "visibility": "simplified"
                "visibility": "on"
              }
            ]
          },
          {
            "featureType": "road.local",
            "elementType": "all",
            "stylers": [
              {
                // "visibility": "simplified"
                "visibility": "on"
              }
            ]
          },
          {
            "featureType": "transit",
            "elementType": "all",
            "stylers": [
              {
                // "visibility": "simplified"
                "visibility": "on"
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
      // Drop main marker on map
      var mainMarker = new google.maps.Marker({
        position: this.location,
        map: this.map,
        animation: google.maps.Animation.DROP
      });
      // Initialize layers for filters
      this.trafficLayer = new google.maps.TrafficLayer();
      this.transitLayer = new google.maps.TransitLayer();
      this.bikeLayer = new google.maps.BicyclingLayer();
    }
  },
  watch: {
    coords: function (new_coords) {
      if (new_coords.lat != null && new_coords.lng != null) {
        this.initMap();
      }
    },
    heatPlaces: function (to) {
      console.log("NEW PLACES");
      console.log(to);
      let mapdat = [];
      for (let i = 0; i < to.length; i++) {
        mapdat.push({
          location: new google.maps.LatLng(this.recommended[i].geometry.location.lat(), this.recommended[i].geometry.location.lng()),
          weight: to[i].body.current
          });
      }
      console.log(mapdat);
      // Initialize heatmap
      this.heatmap = new google.maps.visualization.HeatmapLayer({
          data: mapdat
        });
      this.heatmap.setMap(this.map);
      // Set heatmap options
      this.heatmap.set('radius', 40);
      this.heatmap.set('dissipating', true);

      // var gradient = [
      //   // Really light blue
      //   'rgba(0, 255, 255, 0)',
      //   'rgba(0, 255, 255, 1)',
      //   'rgba(0, 191, 255, 1)',
      //   // Light/dark blue
      //   'rgba(0, 127, 255, 1)',
      //   'rgba(0, 63, 255, 1)',
      //   'rgba(0, 0, 255, 1)',
      //   'rgba(0, 0, 223, 1)',
      //   'rgba(0, 0, 191, 1)',
      //   'rgba(0, 0, 159, 1)',
      //   'rgba(0, 0, 127, 1)',
      //   // Purple
      //   'rgba(63, 0, 91, 1)',
      //   'rgba(127, 0, 63, 1)',
      //   //Red
      //   'rgba(191, 0, 31, 1)',
      //   // Very red
      //   'rgba(255, 0, 0, 1)'
      // ];

      var gradient = [
        // Bulma grey (white smoke)
        'rgba(245, 245, 245, 0)',
        'rgba(245, 245, 245, 0.5)', 

        // Bulma is-primary green 
        'rgba(0, 196, 167, 0.2)',
        'rgba(0, 196, 167, 0.2)',
        'rgba(0, 196, 167, 0.2)',

        // Bulma is-success green
        'rgba(34, 198, 91, 0.4)',
        'rgba(34, 198, 91, 0.4)',
        'rgba(34, 198, 91, 0.6)',
        'rgba(34, 198, 91, 0.6)',
        'rgba(34, 198, 91, 0.8)',
        'rgba(34, 198, 91, 0.8)',
        'rgba(34, 198, 91, 0.9)',
        'rgba(34, 198, 91, 0.9)',
        'rgba(34, 198, 91, 1)',
        'rgba(34, 198, 91, 1)',
      ];
      this.heatmap.set('gradient', gradient);
    }
  },
  created: function() {
    var streetViewMode = this.map.getStreetView();
    var filtersPanel = document.getElementById('filters-panel');
    google.maps.event.addListener(streetViewMode, 'visible_changed', function() {
      if (streetViewMode.getVisible()) {    
        // Hide custom UI
        filtersPanel.classList.add('no-display');
      } 
      else {
        // Display original UI
        filtersPanel.classList.remove('no-display');
      }
    });
  }
}
</script>

<!-- 

// Code for having suggested locations appear on map as well
// More placeholders for marker drop, represents suggested locations
  // King Richie's 43.0082° N, 81.2606° W
  // Saugeen-Maitland Hall 43.0115° N, 81.2793° W
  // 7/11 43.0016° N, 81.2768° W

  var suggestedLocations = [
    {lat: 43.0082, lng: -81.2606},
    {lat: 43.0115, lng: -81.2793},
    {lat: 43.0016, lng: -81.2768}
  ];

var labels = '123456789';
var labelIndex = 0; 

function addMarkerWithTimeout(location, map, timeout) {
  setTimeout(function(){ 
    var newMarker = new google.maps.Marker({
      position: location,
      map: map,
      animation: google.maps.Animation.DROP,
      // label: labels[labelIndex++ % labels.length],
      // icon: suggestedMarker,

      symbol: {fillColor: 'yellow'}
    });
  }, timeout);
};

// Wierd i values to adjust for drop time against mainMarker
for (var i = 1; i <= suggestedLocations.length; i++) {
  addMarkerWithTimeout(suggestedLocations[i-1], this.map, i * 200);
};

 -->