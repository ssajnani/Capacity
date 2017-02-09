<template lang="html">
<div id="placepage">
  <div class="columns">
    <div class="column is-three-quarters">  
      <place_map></place_map>
    </div>
    <div class="column">
      <place_recommend></place_recommend>
    </div>
  </div>
  <div class="columns">
    <div class="column is-three-quarters">  
      <place_messages></place_messages>
    </div>
  </div>
</div>
</template>


<!-- $route.params.id for place id -->
<script>
import place_map from '../components/place/place_map.vue'
import place_recommend from '../components/place/place_recommend.vue'
import place_messages from '../components/place/place_messages.vue'

export default {
  name: 'place',
  components: {
    place_map,
    place_recommend,
    place_messages
  }
}
</script>

<style lang="css">
</style>