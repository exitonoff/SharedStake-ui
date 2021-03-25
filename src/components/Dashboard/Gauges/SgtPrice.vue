<template>
  <DashboardItem headerText="SGT price" >
    <template v-slot:main>
        <div>
          {{ price.toLocaleString("en-US", { style: 'currency', currency: 'USD'}) }}
        </div>
      </template>
  </DashboardItem>
</template>

<script>
import DashboardItem from "../DashboardItem"

export default {
  components: { DashboardItem },
  props: {
    price: Number
  }
}
</script>