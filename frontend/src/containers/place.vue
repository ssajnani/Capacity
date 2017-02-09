<template lang="html">
<div id="placepage">
  <div class="columns">
    <div class="column is-three-quarters">  
      <placemap></placemap>
    </div>
    <div class="column">
      <h1 class="title is-3">Suggestions</h1>
    </div>
  </div>
</div>
</template>


<!-- $route.params.id for place id -->
<script>
import placemap from '../components/place/place_map.vue'

export default {
  name: 'place',
  components: {
    placemap
  }
}
</script>

<style lang="css">
</style>