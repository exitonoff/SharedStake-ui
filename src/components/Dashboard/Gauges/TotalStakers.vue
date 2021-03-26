<template>
  <DashboardItem headerText="Total Stakers" >
    <template v-slot:main>
      <div>
        {{ stakerCount.toLocaleString("en-US")}}
      </div>
      <Change :change="change" :text="change.toString()" />
    </template>
  </DashboardItem>
</template>

<script>
import DashboardItem from "../DashboardItem";
import Change from "./Change";

export default {
  components: { DashboardItem, Change },
  props: {
    stakerCount: Number,
    change: Number
  }
}
</script>