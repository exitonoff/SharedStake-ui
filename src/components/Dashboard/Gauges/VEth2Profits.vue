<template>
  <DashboardItem headerText="vETH2 profits" >
    <template v-slot:main>
        <div>
          {{ profits.toLocaleString("en-US", { style: 'currency', currency: 'USD'}) }}
        </div>
      </template>
  </DashboardItem>
</template>

<script>
import DashboardItem from "../DashboardItem"

export default {
  components: { DashboardItem },
  props: {
    profits: Number
  }
}
</script>