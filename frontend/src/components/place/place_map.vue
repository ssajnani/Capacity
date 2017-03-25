<template lang="html">

<!-- Google Maps -->
<div class="card-image">
  <div id="filters-panel">
  
      <div class="field">
        <a class="button" v-on:click="toggleHeatmap()">Toggle Heatmap</a>
      </div>

    <!-- Show/hide other filters -->
    <div class="field">
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
  props: ['coords', 'suggestions'],
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
    // Siavash's array parser
      // var dataArray = [
      //     [43.0082, -81.2606, new Date()],
      //     [43.0115, -81.2793, new Date()],
      //     [43.000286, -81.278336, new Date()],
      //     [43.0022, -81.3000, new Date()]];
         
      // var todayArray = [];
      // var weekArray = [];
      // var monthArray = [];

      // var i = 0;

      // for (i = 0; i < dataArray.length; i++) {
      //     var long = dataArray[i][0];
      //     var lat =  dataArray[i][1]
      //     var time = dataArray[i][2];

      //    var otherDate = new Date(time);
      //     var otherDay = otherDate.getDay();
      //     var otherMonth = otherDate.getMonth();
      //     var otherYear = otherDate.getFullYear();


      //    var currentDate = new Date();
      //     var day = currentDate.getDay();
      //     var month = currentDate.getMonth();
      //     var year = currentDate.getFullYear();

      //    // today, week, month

      //    if (day == otherDay && year == otherYear && month == otherMonth) { // today
      //         todayArray.push({long, lat});
      //     }

      //    if (month == otherMonth && year == otherYear) { // month
      //         monthArray.push({long, lat});
      //     }
          
      //     var diffDate = Math.abs(otherDate - currentDate);
      //     var diffDays = (diffDate / 1000) / 60 / 60 / 24;
      //     if (diffDays <= 7 && year == otherYear && month == otherMonth) { // week
      //         weekArray.push({long, lat});
      //     }
      // }

      // console.log(todayArray);
      // console.log(monthArray);
      // console.log(weekArray);

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
      // Google Map options
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

      // Main marker drop
      var mainMarker = new google.maps.Marker({
        position: this.location,
        map: this.map,
        animation: google.maps.Animation.DROP,
      });

      // Need fake data from backend 
      // Dummy heatmap data
      var heatmapData = [
        {location: new google.maps.LatLng(43.0082, -81.2606), weight: 5},
        {location: new google.maps.LatLng(43.0115, -81.2793), weight: 10},
        {location: new google.maps.LatLng(43.000286, -81.278336), weight: 3},
        {location: new google.maps.LatLng(43.000735, -81.276809), weight: 5},

        new google.maps.LatLng(43.0115, -81.2793),
        new google.maps.LatLng(43.0016, -81.2768),
        new google.maps.LatLng(43.001623, -81.276882),
      ];

      // Initialize heatmap and other layers
        this.heatmap = new google.maps.visualization.HeatmapLayer({
          data: heatmapData
        });
        this.trafficLayer = new google.maps.TrafficLayer();
        this.transitLayer = new google.maps.TransitLayer();
        this.bikeLayer = new google.maps.BicyclingLayer();

      // Options for heatmap
        this.heatmap.set('radius', 30);
        this.heatmap.set('dissipating', true);
    }
  },
  watch: {
    coords: function (new_coords) {
      if (new_coords.lat != null && new_coords.lng != null) {
        this.initMap();
      }
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