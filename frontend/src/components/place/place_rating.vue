<template lang="html">
	<span>
		<i class="fa fa-star" aria-hidden="true" v-for="n in full_stars"></i>
		<i class="fa fa-star-half-o" aria-hidden="true" v-for="n in half_stars"></i>
		<i class="fa fa-star-o" aria-hidden="true" v-for="n in empty_stars"></i>
	</span>
</template>

<script>
export default {
	name: 'place_rating',
	props: ['rating'],
	data () {
		return {
			full_stars: 0,
			half_stars: 0,
			empty_stars: 0
		};
	},
	methods: {
		toStars (rating, total) {
      // Count number of stars needed

      this.full_stars = Math.floor(rating)
      this.half_stars = rating - this.full_stars > 0 ? 1 : 0
      this.empty_stars = total - this.full_stars - this.half_stars
    }
	},
	created () {
		this.toStars(this.rating, 5);
	}
}
</script>