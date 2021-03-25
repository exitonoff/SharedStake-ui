<template>
  <div class="item">
    <div class="header">{{ headerText }}</div>
    <slot name="main"></slot>
    <slot name="footer"></slot>
  </div>
</template>

<script>
export default {
  props: {
    headerText: String
  }
  
}
</script>

<style>
.item {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: white;
  width: 100%;
  height: 100%;
  background-color: #181818;
}
.header {
  background-color: #151515;
  color: white;
  width: 100%;
  font-size: 0.5em;
}
.numbers {
  color: white;
  width: 100%;
  font-size: 0.5em;
}
</style>