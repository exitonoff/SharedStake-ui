<template>
  <DashboardItem headerText="Total Ether Staked" >
    <template v-slot:main>
        <div>
          {{ totalEther.toLocaleString("en-US")}}
        </div>
      </template>
  </DashboardItem>
</template>

<script>
import DashboardItem from "../DashboardItem"

export default {
  components: { DashboardItem },
  props: {
    totalEther: Number
  }
}
</script>