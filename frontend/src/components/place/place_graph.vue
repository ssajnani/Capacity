<template lang="html">
<div>
	<h1 class="title">Hours</h1>
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
  props: ['chart_data'],
  data: function () {
  	return {
  		ctx: null,
  		timeChart: null,
  	};
  },
  methods: {
		
  	
	},
	created: function() {
		this.ctx = document.getElementById("timeChart");
		this.timeChart = new Chart(this.ctx, {
		    type: 'bar',
		    data: {
		        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
		        datasets: [{
		            label: '# of Votes',
		            data: [12, 19, 3, 5, 2, 3],
		            backgroundColor: [
		                'rgba(255, 99, 132, 0.2)',
		                'rgba(54, 162, 235, 0.2)',
		                'rgba(255, 206, 86, 0.2)',
		                'rgba(75, 192, 192, 0.2)',
		                'rgba(153, 102, 255, 0.2)',
		                'rgba(255, 159, 64, 0.2)'
		            ],
		            borderColor: [
		                'rgba(255,99,132,1)',
		                'rgba(54, 162, 235, 1)',
		                'rgba(255, 206, 86, 1)',
		                'rgba(75, 192, 192, 1)',
		                'rgba(153, 102, 255, 1)',
		                'rgba(255, 159, 64, 1)'
		            ],
		            borderWidth: 1
		        }]
		    },
		    options: {
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
