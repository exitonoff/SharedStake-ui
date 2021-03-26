<template>
  <div>
    <svg xmlns="http://www.w3.org/2000/svg" :class="change < 0 ? 'svg-triangle down' : 'svg-triangle up'">
      <polygon :points="trianglePath"/>
    </svg>
    {{ text }}
  </div>
</template>

<script>

export default {
  props: { change: Number, text: String},
  computed: {
    trianglePath() {
      if (this.change < 0) {
        // Return triangle pointing down
        return "0,0 16,0 8,16"
      } else {
        // Return triangle pointing up
        return "0,16 8,0 16,16"
      }
    }
  }
}

</script>

<style scoped>
.svg-triangle{
  margin: 0 auto;
  width: 16px;
  height: 16px;
}

.svg-triangle.up polygon {
  fill:#98d02e;
  stroke:#65b81d;
  stroke-width:2;
}

.svg-triangle.down polygon {
  fill:#d0332e;
  stroke:#b8341d;
  stroke-width:2;
}
</style>
