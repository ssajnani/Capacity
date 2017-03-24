<template lang="html">
<div>
	<h1 class="title">History</h1>
	<canvas id="timeChart"></canvas>
	<br>
	<div class="columns">
		<div class="column is-2 is-offset-3">
			<a class="button is-primary is-large has-text-centered" v-on:click="checkIn()">Check In</a>
			
		</div>
	</div>
</div>
</template>

<style type="text/css">
	#timeChart {
	  width: 100%;
	  height: 500px;
	}
</style>

<script>
export default {
  name: 'place_graph',
  props: ['chart_data'],
  data: function () {
  	return {
  		ctx: null,
  		timeChart: null,
  	};
  },
  methods: {
		checkIn: function(){
      this.$emit('checkIn');
    }
	},
	mounted: function() {
		this.ctx = document.getElementById("timeChart");

		Chart.defaults.global.defaultFontColor = '#666';
		Chart.defaults.global.defaultFontFamily = "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif";
		Chart.defaults.global.defaultFontSize = 10;
		Chart.defaults.global.defaultFontStyle = 	'normal';

		this.timeChart = new Chart(this.ctx, {
	    type: 'line',
	    data: {
        labels: ["7 am", "8 am", "9 am", "10 am", "11 am", "12 pm"],
        datasets: [{
          data: [5, 7, 12, 10, 9, 6],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)'
          ],
          borderColor: [
            'rgba(255,99,132,1)',
          ],
          borderWidth: 1
        }]
	    },
	    options: {
	    	responsive: true,
	    	title: {
	    		display: true,
	    		text: 'Past 6 Hours',
	    	},
	    	legend: {
	    		display: false,
	    	},
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero:true
            }
          }]
        }
	    }
		});
	}
}
</script>
