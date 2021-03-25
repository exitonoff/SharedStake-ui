<template>
  <DashboardItem headerText="Supported vEth2 pools" >
    <template v-slot:main>
        <div>
          {{ poolCount.toLocaleString("en-US") }}
        </div>
      </template>
  </DashboardItem>
</template>

<script>
import DashboardItem from "../DashboardItem"

export default {
  components: { DashboardItem },
  props: {
    poolCount: Number
  }
}
</script>