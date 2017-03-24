<template lang="html">
  <!-- Name, Rating, Descriptions, w/e -->
  <div>
  <!-- If mobile, has-text-centered -->
    <p class="title is-3">{{ name }}</p>
    <p class="subtitle is-6">{{ address }}</p>
    <p class="subtitle has-text-centered">Rating</p>
    <div id="starRatingContainer" class="has-text-centered"></div>
    <br>
    
  </div>
</template>

<script>
import auth from '../../auth'

export default {
  name: 'place_info',
  props: ['name', 'address', 'rating'],
  data: function() {
    return {
      ratingValue: this.rating,
    }
  },
  watch: {
    'rating' (to, from) {
      this.ratingValue = to;

      // Convert number into stars
      var starEmptyImg = '<i class="fa fa-star-o" aria-hidden="true"></i>';
      var starHalfImg = '<i class="fa fa-star-half-o" aria-hidden="true"></i>';
      var starFullImg = '<i class="fa fa-star" aria-hidden="true"></i>';

      var starHalfCount = 0
      var starFullCount = Math.floor(this.ratingValue);
      if (this.ratingValue - starFullCount > 0) { // half exists
        starHalfCount = 1;
      } else {
        starHalfCount = 0;
      }
      var starEmptyCount = 5 - starFullCount - starHalfCount;

      var starContainer = document.getElementById('starRatingContainer');
      var result = '';
      for (var i = 0; i < starFullCount; i++) {
        // display starFullImg
        result += starFullImg;
      }

      for (var i = 0; i < starHalfCount; i++) {
        // display starHalfImg
        result += starHalfImg;
      }

      for (var i = 0; i < starEmptyCount; i++) {
        // display starEmptyCount
        result += starEmptyImg;
      }

      console.log("Rating: " + this.ratingValue);
      starContainer.innerHTML = result;
    }
  }
}
</script>

      