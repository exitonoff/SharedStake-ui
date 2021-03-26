<template>
  <DashboardItem headerText="Protocols you invest vEth2" >
    <template v-slot:main>
      <div>
        {{ protocolCount.toLocaleString("en-US")}}
      </div>
      <div class="chart_container">
        <SimpleLineGraph :history="history" chartId="protocols-invested" />
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
    protocolCount: Number,
    history: Object
  }
}
</script>