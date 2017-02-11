<template lang="html">
<div>

<navbar></navbar>
<div id="placepage" class="section container">
  <div class="columns">
    <div class="column is-three-quarters">  
      <place_map></place_map>
      <div class="section">
        <place_messages></place_messages>
      </div>
    </div>
    <div class="column">
      <place_recommend></place_recommend>
    </div>
  </div>
</div>
<!-- <footerbar></footerbar> -->

</div>
</template>

<!-- $route.params.id for place id -->
<script>
import navbar from '../components/navbar.vue'
// import footerbar from '../components/footer.vue'

import place_map from '../components/place/place_map.vue'
import place_recommend from '../components/place/place_recommend.vue'
import place_messages from '../components/place/place_messages.vue'

export default {
  name: 'place',
  components: {
    navbar,
    // footerbar,

    place_map,
    place_recommend,
    place_messages
  }
}
</script>