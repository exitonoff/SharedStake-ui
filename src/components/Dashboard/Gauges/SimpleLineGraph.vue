<template>
  <div class="chart-wrapper">
    <!-- Chart itself -->
    <TrendChart  
      :datasets="dataset"
      :interactive="true"
      :id="chartId"
      @mouse-move="onMouseMove" />
    <!-- Tool tip element -->
    <div 
      id="pop" 
      role="tooltip" 
      ref="tooltip" 
      class="tooltip" 
      :class="{'is-active': tooltipData}">
      <div class="tooltip-container" v-if="tooltipData">
        <strong>{{ labels[tooltipData.index] }}</strong>
        <div class="tooltip-data">
          <div class="tool-tip-item">{{tooltipData.data[0]}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { createPopper } from "@popperjs/core"

export default {
  props: {
    history: Object,
    chartId: String
  },
  data() {
    return {
      tooltipData: null,
      popper: null,
      popperIsActive: false
    }
  },
  computed: {
    dataset() {
      return [{ 
        data: this.history.data, 
        smooth: true,
        showPoints: false, 
      }];
    },
    labels() {
      return this.history.labels;
    }
  },
  mounted() {
    this.initPopper();
  },
  methods: {
    initPopper() {
      const chart = document.querySelector(`#${this.chartId}`);
      const ref = chart.querySelector(".active-line");
      const tooltip = this.$refs.tooltip;
      this.popper = new createPopper(ref, tooltip, {
        placement: "right",
      });
    },
    onMouseMove(params) {
      console.log("Params:", params)
      this.popperIsActive = !!params;
      this.popper.update();
      this.tooltipData = params || null;
    }
  }
}
</script>

<style scoped>
.chart-wrapper {
  height: 100%;
  width: 100%;
}
.labels {
    stroke: rgba(0, 0, 0, 0.05);
  }
.active-line {
  stroke: rgba(0, 0, 0, 0.2);
}
.point {
  stroke-width: 2;
  transition: stroke-width 0.2s;
}
.point.is-active {
  stroke-width: 5;
}

.stroke {
  stroke: #fbac91;
  stroke-width: 2;
}
.fill {
  fill: #fbac91;
  opacity: 0.05;
}
.point {
  fill: #fbac91;
  stroke: #fbac91;
}

.tool-tip {
  display: none;
  padding: 10px;
  background: #fff;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  pointer-events: none;
  font-size: 12px;
}

.tooltip.is-active {
  display: block;
}

.tool-tip-item {
  display: flex;
  align-items: center;
  font-size: 12px;
}
.tooltip-container {
  background-color: grey;
  font-size: 12px;
}
</style>