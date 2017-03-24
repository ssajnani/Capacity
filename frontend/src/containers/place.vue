<!-- The container for the place page -->

<template lang="html">
<div>

<navbar></navbar>
<div id="placepage" class="section container">
  <div class="columns">
    <div class="column">

      <place_info 
        :name="name"
        :address="address"
        :rating="rating"
        >
      </place_info>

      <place_graph></place_graph>
    </div>
    <div class="column is-half">
      
      <div class="card">
        <place_map :coords="coords"></place_map>
      </div>


      <div class="section">
        <place_messages :messages="messages" v-on:postMessage="postMessage" v-on:likeMessage="likeMessage"></place_messages>
      </div>
   
    </div>
    <div class="column">
      <place_recommend :recommendations="recommended" v-on:goToPlace="goToPlace"></place_recommend>
    </div>
  </div>
</div>

</div>
</template>



<!-- $route.params.id for place id -->
<script>
import router from '../router'
import api from '../api'

import navbar from '../components/navbar.vue'
// import footerbar from '../components/footer.vue'

// All the sub-components
import place_map from '../components/place/place_map.vue'
import place_recommend from '../components/place/place_recommend.vue'
import place_messages from '../components/place/place_messages.vue'
import place_graph from '../components/place/place_graph.vue'
import place_info from '../components/place/place_info.vue'

export default {
  name: 'place',
  components: {
    navbar,
    place_map,
    place_recommend,
    place_messages,
    place_graph,
    place_info
  },
  data: function () {
    /* Make some dummy data for now... */
    return {
      messages: null,
      recommended: null,
      name: '',
      coords: {
        lat: null,
        lng: null
      },
      address: '',
      type: null,
      rating: null,
      place_id: null,
      gmaps: null,
    };
  },

  created: function () {
    this.gmaps = new google.maps.places.PlacesService(document.createElement('div'));
    this.updatePlace();
  },
  methods: {
    updatePlace: function(){
      this.place_id = this.$route.params.id;
      console.log('place id: ' + this.place_id);

    // Calls google maps for place getDetails

    this.gmaps.getDetails({ placeId: this.place_id }, (data, status) => {
      console.log(status);
      console.log(data);

      if (status == google.maps.places.PlacesServiceStatus.OK) {
        console.log(data);
        this.name = data.name;
        this.address = data.formatted_address;
        this.type = data.types[0];
        this.rating = data.rating;
        const lat = data.geometry.location.lat();
        const lng = data.geometry.location.lng();

        this.coords = {
          lat: lat,
          lng: lng
        };

        console.log(this.coords);
        
        this.gmaps.nearbySearch({
            location: this.coords,
            type: this.type,
            radius: 5000,
            openNow: true,
            rankBy: google.maps.places.RankBy.PROMINENCE
          }, (data, status) => {

          if (status == google.maps.places.PlacesServiceStatus.OK) {
            this.recommended = data.filter(place => {
              return this.place_id != place.place_id;
            });
          } 
          else {
        // Handle error
          }
        });  
      }
      else{
        //Handle error
      }
     });    

    // Calls backend for messages, data
    api.getPlace(this, this.place_id, result => {
      this.messages = result.messages;
      console.log(this.messages);
    })

  },
    goToPlace: function (id) {
      console.log(id);
      router.push({'name':'place', 'params':{'id':id}});

      // For recommended places
    },
    checkIn: function()
    {
      //Add these coords to an array
      this.coords.lat;
      this.coords.lng;
    },
    postMessage: function (msg) {
      console.log(msg);
      api.postMessage(this, msg, this.place_id, (data) => {
        console.log(data);
        this.messages.push(data);
      });
    },
    likeMessage: function (id) {

      api.likeMessage(this, id, (id) => {
        console.log('return')
        // console.log(this.messages);

        this.messages.forEach(n => {
          if (n.id === id) {
            n.likes += 1; 
          }
        });
      });
    },
    incrementMsglike: function (id) {

    }
  },
  watch: {
    '$route' (to, from) {
      console.log('asdf');
      this.updatePlace();
      // react to route changes...
      // When the user goes to another page
    }
  }
}
</script>