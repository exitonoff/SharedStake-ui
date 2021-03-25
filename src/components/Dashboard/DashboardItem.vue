<template>
  <div class="item">
    <div class="header">{{ headerText }}</div>
    <div class="main">
      <slot name="main"></slot>
    </div>
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
  background-color: #2a2a2a;
}
.header {
  background-color: #272727;
  color: white;
  width: 100%;
  font-size: 0.5em;
}
.main {
  margin: auto 0;
}
</style>