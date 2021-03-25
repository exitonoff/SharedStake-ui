<template>
  <DashboardItem headerText="Supported Protocols" >
    <template v-slot:main>
        <div>
          {{ protocolCount.toLocaleString("en-US") }}
        </div>
      </template>
  </DashboardItem>
</template>

<script>
import DashboardItem from "../DashboardItem"

export default {
  components: { DashboardItem },
  props: {
    protocolCount: Number
  }
}
</script>