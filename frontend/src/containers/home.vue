<template lang="html">
<section class="hero is-fullheight">
  <div class="hero-head"><navbar></navbar></div>
  <div id = "hero-body-id" class="hero-body">
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

.title {
  color: white;
}

.hero .nav {
  background-color: black;
}

.hero-body-id {
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('http://placehold.it/350x150');
  background-position: center top;
}

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
      stock_images: [
      'http://www.pixelstalk.net/wp-content/uploads/2016/06/1920x1080-Wallpaper-Image.jpg',
      'http://www.pixelstalk.net/wp-content/uploads/2016/06/1920x1080-Wallpaper-Image.jpg',
      'http://www.pixelstalk.net/wp-content/uploads/2016/06/1920x1080-Wallpaper-Image.jpg'],
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
  mounted: function() {
    var stock_images_length = this.stock_images.length;
    var stock_image = this.stock_images[Math.floor((Math.random() * stock_images_length) + 0)];
    //document.body.style.backgroundImage = "url('" + stock_image + "')";
    var img = document.createElement("img");
    img.src = stock_image;
    //document.getElementById("hero-body-id").style.backgroundImage = "url('" + stock_image + "')";
    document.getElementById("hero-body-id").style.background = "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('"+ stock_image +"')";
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