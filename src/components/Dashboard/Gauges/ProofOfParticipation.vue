<template>
  <DashboardItem headerText="Proof of participation" >
    <template v-slot:main>
        <div>
          {{ participationCount.toLocaleString("en-US") }}
        </div>
      </template>
  </DashboardItem>
</template>

<script>
import DashboardItem from "../DashboardItem"

export default {
  components: { DashboardItem },
  props: {
    participationCount: Number
  }
}
</script>