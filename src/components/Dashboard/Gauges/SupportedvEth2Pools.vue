<template>
  <DashboardItem headerText="Supported vEth2 pools" >
    <template v-slot:main>
      <div>
        {{ poolCount.toLocaleString("en-US") }}
      </div>
      <Change :change="change" :text="percentualChange.toString() + '%'" />
    </template>
  </DashboardItem>
</template>

<script>
import DashboardItem from "../DashboardItem";
import Change from "./Change";

export default {
  components: { DashboardItem, Change },
  props: {
    poolCount: Number,
    change: Number
  },
  computed: {
    percentualChange() {
      const countBefore = this.poolCount - this.change;
      const percentual = (this.poolCount / countBefore - 1) * 100;
      return percentual.toFixed(2);
    }
  }
}
</script>