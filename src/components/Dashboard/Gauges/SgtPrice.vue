<template>
  <DashboardItem headerText="SGT price" >
    <template v-slot:main>
      <div>
        {{ price.toLocaleString("en-US", { style: 'currency', currency: 'USD'}) }}
      </div>
      <Change :change="change" :text="percentualChange.toString() + '%'" />
      <div>Last 24hrs</div>
    </template>
  </DashboardItem>
</template>

<script>
import DashboardItem from "../DashboardItem";
import Change from "./Change";

export default {
  components: { DashboardItem, Change },
  props: {
    price: Number,
    change: Number
  },
  computed: {
    percentualChange() {
      const priceBefore = this.price - this.change;
      const percentual = (this.price / priceBefore - 1) * 100;
      return percentual.toFixed(2);
    }
  }
}
</script>