import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueEllipseProgress from 'vue-ellipse-progress';
import store from "./store"
import TrendChart from "vue-trend-chart";
Vue.config.productionTip = false

Vue.use(VueEllipseProgress, "vep");// you can define a name and use the plugin like <vep/>
Vue.use(TrendChart);

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
