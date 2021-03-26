<template>
  <DashboardItem headerText="Supported Protocols" >
    <template v-slot:main>
      <div>
        {{ protocolCount.toLocaleString("en-US") }}
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
    protocolCount: Number,
    change: Number
  },
  computed: {
    percentualChange() {
      const countBefore = this.protocolCount - this.change;
      const percentual = (this.protocolCount / countBefore - 1) * 100;
      return percentual.toFixed(2);
    }
  }
}
</script>