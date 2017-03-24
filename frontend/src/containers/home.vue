<template lang="html">
<section class="hero is-fullheight">

  <div class="hero-head">
    <navbar></navbar>
  </div>

  <div id="hero-body-id" class="hero-body">
    <div class="container">
      <div class="columns">
        <div class="column is-half is-offset-one-quarter">

          <!-- Logo -->
          <img src="https://files.slack.com/files-pri/T3R2NUV7E-F4NBPJ65P/testlogo1.png"/>

          <!-- Space formatting -->
          <br>
          <br>

          <!-- Search bar -->
          <div id="search-bar" class="control has-icon has-icon-right">
            <input v-model="search_text" v-on:keyup.enter="submit_text" class="input is-large" type="text" placeholder="Libraries, bars, stores...">
            <span class="icon is-small">
              <i id="search-icon" v-on:click="submit_text" class="fa fa-search"></i>
            </span>
          </div>

          <!-- Autocomplete for search bar -->
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
  background-color: #eeeeee;
}
#hero-body-id {
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('http://placehold.it/350x150');
  background-position: center top;
  background-size: cover !important;
}
#search-bar {
  margin-bottom: 0;
}
#search-icon {
  z-index: 3;
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
        // Tokyo
        'https://images8.alphacoders.com/501/thumb-1920-501447.jpg',
        // Berlin
        'https://images8.alphacoders.com/710/thumb-1920-710914.jpg',
        // Vienna
        'https://images5.alphacoders.com/595/thumb-1920-595628.jpg',
        // Danish girl
        'https://images2.alphacoders.com/441/thumb-1920-441238.jpg',
        // Jackie Chan
        'https://images8.alphacoders.com/463/thumb-1920-463250.jpg',
        // Munich
        'https://images8.alphacoders.com/684/thumb-1920-684186.jpg',
        // Melbourne
        'https://images4.alphacoders.com/714/thumb-1920-714270.jpeg',
        // Kyoto
        'https://images4.alphacoders.com/289/thumb-1920-289526.jpg',
        // Sydney
        'https://images.alphacoders.com/701/thumb-1920-701597.jpg',
        // Osaka
        'https://images.alphacoders.com/658/thumb-1920-658784.jpg',
        // Stockholm 
        'https://iceland.nordicvisitor.com/images/1/sweden/stockholm-sweden-winter.jpg',
        // Vancouver
        'https://images.alphacoders.com/706/thumb-1920-706505.jpg',
        // Shenzhen
        'http://wallpaper.pickywallpapers.com/1920x1080/great-city-landscape.jpg',
        // Zurich
        'https://images2.alphacoders.com/459/thumb-1920-459147.jpg',
        // Madrid
        'https://images3.alphacoders.com/740/thumb-1920-740158.png',
        // Hamburg
        'https://images2.alphacoders.com/257/thumb-1920-257010.jpg',
        // Lisbon
        'https://images4.alphacoders.com/689/thumb-1920-689197.jpg',
        // Frankfurt
        'https://images6.alphacoders.com/540/thumb-1920-540020.jpg',
        // Hong Kong
        'https://images5.alphacoders.com/352/thumb-1920-352111.jpg',
        // Barcelona 
        'https://images2.alphacoders.com/278/thumb-1920-278552.jpg',
        // Singapore 
        'https://images.alphacoders.com/526/thumb-1920-526090.jpg',
        // Amsterdam
        'https://images8.alphacoders.com/427/thumb-1920-427490.jpg',
        // Dublin
        'https://wallpprs.media/1920x1080/dublin_wallpprs.com_.jpg',
        // Hawaii
        'https://images7.alphacoders.com/360/thumb-1920-360408.jpg',
        // Boston
        'https://images4.alphacoders.com/234/thumb-1920-234136.jpg',
        // Montreal
        'https://images8.alphacoders.com/430/thumb-1920-430779.jpg'
        ],
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
    },
    // When enter key is pressed in search bar, return first place page
    submit_text: function() {
      if (this.suggestions.length !== 0) {
        this.selectPlace(this.suggestions[0])
      }
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

    // Initialize autocompleteservice
    this.autocomplete = new google.maps.places.AutocompleteService();

  },
  mounted: function() {    
    var stock_images_length = this.stock_images.length;
    var stock_image = this.stock_images[Math.floor((Math.random() * stock_images_length) + 0)];
    var img = document.createElement("img");
    img.src = stock_image;
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