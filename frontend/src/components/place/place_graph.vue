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
  		loc_data: null
  	};
  },
	mounted: function() {
		Chart.defaults.global.defaultFontSize = 10;
		this.ctx = document.getElementById("timeChart");
	},
	watch: {
		graph_data (to) {
			if (to != null) {

				// Get the current time for graph of recent location activity
				var date = new Date();
				var day = date.getDay();
				var hour = date.getHours();

				// # of people in the past 6 hours
				var graph_recent_data = [];
				for (var recent = 5; recent >= 0; recent--) {
					graph_recent_data.push(parseInt(to[day][hour - recent]));
				}

		    // Function to format 24 hours into 12
				function hour24To12(hours) {
					var meridian = (hours < 12) ? "am" : "pm";
			    hours = (hours > 12) ? hours - 12 : hours;
			    hours = (hours == 0) ? 12 : hours;
			    return hours + ' ' + meridian;
				}

				// Generate labels for past 6 hours in 12 hour format
				var graph_recent_labels = [];
				for (var i = 5; i >= 0; i--) {
					graph_recent_labels.push(String(hour24To12(hour - i)));
				}

				function printChartData() {
					console.log("--- Chart Data ---");
					for (var i = 0; i < graph_recent_data.length; i++) {
						console.log("# people: " + graph_recent_data[i] + " --- Time: " + graph_recent_labels[i]);
					}
				}

				printChartData();

				// Initialize chart
				this.timeChart = new Chart(this.ctx, {
			    type: 'line',
			    data: {
		        labels: graph_recent_labels,
		        datasets: [{
		          data: graph_recent_data,
		          backgroundColor: [
		          	// Same color as Bulma primary button (green/teal)
		            'rgba(0, 196, 167, 0.2)',     
		            'rgba(0, 196, 167, 0.2)',     
		            'rgba(0, 196, 167, 0.2)',     
		            'rgba(0, 196, 167, 0.2)',     
		            'rgba(0, 196, 167, 0.2)',     
		            'rgba(0, 196, 167, 0.2)',     
		          ],
		          borderColor: [
		          	// Same as background color but opaque, 0 = transparent and 1 = opaque
		            'rgba(0, 196, 167, 1)',
		            'rgba(0, 196, 167, 1)',
		            'rgba(0, 196, 167, 1)',
		            'rgba(0, 196, 167, 1)',
		            'rgba(0, 196, 167, 1)',
		            'rgba(0, 196, 167, 1)',
		            'rgba(0, 196, 167, 1)',
		          ],
		          borderWidth: 1
		        }]
			    },
			    options: {
			    	responsive: true,
			    	title: {
			    		display: true,
			    		text: 'Number of People',
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
	}
}
</script>
