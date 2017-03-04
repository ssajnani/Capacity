<template lang="html">
<section class="hero is-fullheight">
  <div class="hero-head"><navbar></navbar></div>
  <div class="hero-body">
    <div class="container">

      <div class="columns">
        <div class="column is-half is-offset-one-quarter">

          <h1 class="title">
            Search
          </h1>

          <div id="search-bar" class="control has-icon has-icon-right">
            <input v-model="search_text" class="input is-large" type="text" placeholder="Libraries, bars, stores...">
            <span class="icon is-small">
              <i class="fa fa-search"></i>
            </span>
          </div>

          <table class="table is-bordered autocomplete">
            <tbody>
              <tr v-for="suggestion in suggestions" v-on:click="selectPlace(suggestion)">
                <td>{{suggestion.description}}</td>
              </tr>
            </tbody>
          </table>

        </div>
      </div>

    </div>
  </div>
</section>
</template>

<style scoped>

#search-bar {
  margin-bottom: 0;
}

.autocomplete tr {
  cursor: pointer;
}

</style>

<script>

import router from '../router'

import navbar from '../components/navbar.vue'

export default {
  name: 'home',
  components: {
    navbar
  },
  data: function () {
    return {
      default_location: { // London, Ontario
        lat: 42.9849,
        lng: 81.2453
      },
      location: {
        lat: null,
        lng: null
      },
      search_text: '',
      search_rad: 10000,
      autocomplete: null,
      suggestions: [],
    }
  },
  methods: {
    selectPlace: function (place) {
      // Route to the place page
      console.log("Redirecting to: " + place);
      router.push({ name: 'place', params: { id: place.place_id }})
    }
  },
  created: function() { // Component initialization: variables, etc...

    this.location.lat = this.default_location.lat;
    this.location.lng = this.default_location.lng;

    // Request user location for autocomplete accuracy
    if (navigator.geolocation) {

      navigator.geolocation.getCurrentPosition((success) => {
        this.location.lat = success.coords.latitude;
        this.location.lng = success.coords.longitude;
      }, (error) => {
        console.log('error');
      });

    }

    // initialize autocompleteservice
    this.autocomplete = new google.maps.places.AutocompleteService();

  },

  // Fires off events on data changes
  watch: {

    // When user types something into the searchbar
    search_text: function (new_text) {

      // Calls google autocomplete and updates data
      const latlng = new google.maps.LatLng(this.location.lat, this.location.lng);

      if (new_text != '') {
        this.autocomplete.getPlacePredictions(
          {
            location: latlng,
            radius: this.search_rad,
            types: ['establishment'],
            input: new_text
          }, 
          (response, status) => {

            if (status != google.maps.places.PlacesServiceStatus.OK) {
              console.warn(status);
            } else {
              this.suggestions = response;
            }
          }
        );
      } else {
        this.suggestions = [];
      }
    }
  }
}

</script>