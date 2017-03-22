<template lang="html">
<div>
<h1 class="title">Suggested Places</h1>

<!-- SUGGESTED PLACE OBJECT -->
<!-- REPEAT FOR EVERY SUGGESTED PLACE IN ARRAY -->
<article class="media" v-for="place in recommendations">
  <figure class="media-left">
    <router-link :to="{ name: 'place', params: { id: place.id }}">
      <p class="image is-64x64">
        <img src="http://bulma.io/images/placeholders/128x128.png">
      </p>
    </router-link>
  </figure>
  <div class="media-content">
    <router-link :to="{ name: 'place', params: { id: place.id }}">
      <div class="content">
        <p>
          <strong>Name {{place.name}}</strong>
          Location {{place.location}}<br>
          <em>Rating {{place.rating}}</em>
        </p>
      </div>
    </router-link>
  </div>
</article>
</div>
</template>

<script>
export default {
  name: 'place_recommend',
  props: ['recommendations']
}
</script>