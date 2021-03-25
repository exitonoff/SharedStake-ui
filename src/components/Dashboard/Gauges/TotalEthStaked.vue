<template>
  <DashboardItem headerText="Total Ether Staked" >
    <template v-slot:main>
      <div>
        {{ totalEther.toLocaleString("en-US")}}
      </div>
      <div class="chart_container">
        <SimpleLineGraph :history="history" chartId="total-ether-staked" />
      </div>
    </template>
  </DashboardItem>
</template>

<script>
import DashboardItem from "../DashboardItem"
import SimpleLineGraph from "./SimpleLineGraph"

export default {
  components: { DashboardItem, SimpleLineGraph },
  props: {
    totalEther: Number,
    history: Object
  },
}
</script>

<style scoped>
.chart_container {
  height: 45%;
  margin: 10px 10px;
}
</style>