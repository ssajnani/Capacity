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
  props: ['chart_data']
}
</script>
