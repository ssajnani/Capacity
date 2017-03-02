<template lang="html">
<div v-on:keyup.enter="goto_place" id="home">
<section class="hero is-fullheight">
  <div class="hero-head"><navbar></navbar></div>
  <div class="hero-body">
    <div class="container">

      <h1 class="title">
        Search
      </h1>

      <div class="columns">
        <div class="column is-5">
          <div class="control has-icon has-icon-right">
            <div id ="demo">
              <!--<p><i>myInstanceAddress</i> Property</p>-->
              <pre>{{ myInstanceAddress | json }}</pre>
                <input onblur="this.focus();" v-on:keyup.enter="goto_place" id="addressInput" class="input is-large" type="text" placeholder="Libraries, bars, stores...">
              <span class="icon is-small">
                <i class="fa fa-search"></i>
              </span>
            </div>
          </div>
        </div>
      </div>

      <!-- spacing
      <div style="margin-top:-50px;"></div>-->

      <div class="columns">
        <div class="column is-12">
          <div id="search-bar-results">

          </div>
        </div>
      </div>

    </div>
  </div>
</section>
</div>
</template>

<script type = "text/javascript">
  var googleAutocomplete = require('../components/googleAutocomplete.js');
</script>

<script>

  import navbar from '../components/navbar.vue'

  export default {
    name: 'home',
    components: {
      navbar
    },
    data: {
        myInstanceAddress: {
            address: null,
            city: null,
            state: null,
            zipcode: null,
            country: null
        },
        googleAutoCompleteInput: 'addressInput',
        url: null
    },
    ready: function() {
        //get input element where user will type/search addresses
        //get DOM input element where users will start typing addresses
        var inputElement = document.getElementById(this.googleAutoCompleteInput);

        //create new google maps object
        this.googleAddress.autocomplete = new google.maps.places.Autocomplete(inputElement,
            {types: ['geocode']});

        //add event listener to trigger method getAddressComponents when user select an address
        this.googleAddress.autocomplete.addListener('place_changed', this.getAddressComponents);
    },
    methods: {
      updateAddress: function() {
            //assign required values to my instance property
            this.myInstanceAddress.address = this.googleAddress.street_number + ' ' + this.googleAddress.street_name;
            this.myInstanceAddress.city = this.googleAddress.city;
            this.myInstanceAddress.state = this.googleAddress.state;
            this.myInstanceAddress.zipcode = this.googleAddress.zipcode;
            this.myInstanceAddress.country = this.googleAddress.country;
      },
      setResultData: function(name, description="") {
        var result = "<article class='media'>" +
              "<figure class='media-left'>" +
                "<p class='image is-64x64'>" +
                  "<img src='http://bulma.io/images/placeholders/128x128.png'>" +
                "</p>" +
              "</figure>" +
              "<div class='media-content'>" +
                "<div class='content'>" +
                  "<p>" +
                    "<a href = \"/place/"+ name +"\"><strong>" + name + "</strong></a>" +
                    "<br>" +
                    description +
                  "</p>" +
                "</div>" +
              "</div>" +
            "</article>";
        return result;
      },
      addResult: function(resultData) {
         document.getElementById("search-bar-results").innerHTML = resultData;
      },
      goto_place: function () {
        var name = document.getElementById("addressInput").value;
        var replace = "";
        name = name.split(".").join(replace);
        window.location.href = "/place/"+encodeURI(name);
      }
    },
    mounted: function() {
      
    }
  }

</script>

<!--<style type="text/css">
  .hero.is-fullheight .hero-body {
    display: block;
  }
</style>-->