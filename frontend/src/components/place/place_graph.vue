<template lang="html">
<div>
	<!-- If mobile, has-text-centered -->
	<h1 class="title">Location Activity</h1>
	<canvas id="timeChart"></canvas>
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
  props: ['graph_data'],
  data: function () {
  	return {
  		ctx: null,
  		timeChart: null,
  	};
  },
  methods: {
		// checkIn: function(){
	  //     this.$emit('checkIn');
	  //   }
	},
	mounted: function() {
		Chart.defaults.global.defaultFontSize = 10;

		this.ctx = document.getElementById("timeChart");
		this.timeChart = new Chart(this.ctx, {
	    type: 'line',
	    data: {
        labels: ["7 am", "8 am", "9 am", "10 am", "11 am", "12 pm"],
        datasets: [{
          // Need data from backend
          data: [5, 7, 12, 10, 9, 6],
          backgroundColor: [
          	// Same color as primary button (green/teal)
            'rgba(0, 196, 167, 0.2)',
            
          ],
          borderColor: [
          	// Same as background color but opaque, 0 = transparent and 1 = opaque
            'rgba(0, 196, 167, 1)',
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