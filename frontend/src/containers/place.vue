<template lang="html">
<div>

<navbar></navbar>
<div id="placepage" class="section container">
  <div class="columns">
    <div class="column">
      <place_graph></place_graph>
    </div>
    <div class="column is-half">  
      <place_map :coords="5"></place_map>
      <div class="section">
        <place_messages :messages="messages"></place_messages>
      </div>
    </div>
    <div class="column">
      <place_recommend :recommendations="recommended"></place_recommend>
    </div>
  </div>
</div>
<!-- <footerbar></footerbar> -->

</div>
</template>

<!-- $route.params.id for place id -->
<script>
import router from '../router'

import navbar from '../components/navbar.vue'
// import footerbar from '../components/footer.vue'

import place_map from '../components/place/place_map.vue'
import place_recommend from '../components/place/place_recommend.vue'
import place_messages from '../components/place/place_messages.vue'
import place_graph from '../components/place/place_graph.vue'

const maps_endpoint = 'https://maps.googleapis.com/maps/api/place/details/json';
const api_endpoint = '';

export default {
  name: 'place',
  components: {
    navbar,
    place_map,
    place_recommend,
    place_messages,
    place_graph 
  },
  data: function () {
    /* Make some dummy data for now... */
    return {
      messages: [],
      recommended: [],
      map_data: null,
      place_id: ''
    };
  },
  created: function () {
    console.log('place id: ' + this.$route.params.id);
    this.place_id = this.$route.params.id;

    // Backend: messages, graph data, recommendations
    // this.$http.get();

    // Google Maps: name, coordinates, 
    // this.$http.get();

  },
  methods: {
    goToPlace: function (id) {

    }
  },
  watch: {
    '$route' (to, from) {
      // react to route changes...
      // When the user goes to another page
    }
  }
}
</script>