<template>
  <DashboardItem headerText="Total Stakers" >
    <template v-slot:main>
        <div>
          {{ stakerCount.toLocaleString("en-US")}}
        </div>
      </template>
  </DashboardItem>
</template>

<script>
import DashboardItem from "../DashboardItem"

export default {
  components: { DashboardItem },
  props: {
    stakerCount: Number
  }
}
</script>