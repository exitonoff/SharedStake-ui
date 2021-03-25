<template>
  <DashboardItem headerText="Exit Pool Liquidity" >
    <template v-slot:main>
        <div>
          {{ exitLiquidity.toLocaleString("en-US")}}
        </div>
      </template>
  </DashboardItem>
</template>

<script>
import DashboardItem from "../DashboardItem"

export default {
  components: { DashboardItem },
  props: {
    exitLiquidity: Number
  }
}
</script>