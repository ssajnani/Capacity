<template lang="html">
<div>
<h1 class="title">Hours</h1>
<canvas id="hoursChart"></canvas>
</div>
</template>

<script>
export default {
  name: 'place_graph',
  props: ['chart_data'],
  data: function () {
    return {
      data: function () {
        return chart_data;
      }
    }
  },
  watch: {
    chart_data: function (new_data) {
      this.data = new_data;
      /* watches for whenever data changes */
    }
  },
  methods: {

  } 
}
</script>

<style type="text/css">
#hoursChart {
  width: 100%;
  height: 800px;
}
</style>