<template>
  <DashboardItem headerText="Exit Pool Liquidity" >
    <template v-slot:main>
      <div>
        {{ exitLiquidity.toLocaleString("en-US")}}
      </div>
      <div class="chart_container">
        <SimpleLineGraph :history="history" chartId="exit-pool-liquidity" />
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
    exitLiquidity: Number,
    history: Object
  }
}
</script>