<template>
  <div class="grid-container">
    <DashboardItem class="card" headerText="Total Ether Staked" />
    <DashboardItem class="card" headerText="Exit Pool Liquidity" />
    <DashboardItem class="card" headerText="Protocols you invest vEth2" />
    <DashboardItem class="card" headerText="Total Stakers" />
    <DashboardItem class="card" headerText="vEth2 profits">
      <template v-slot:main>
        <div>
          Main
        </div>
      </template>
      <template v-slot:footer>
        <div>
          footer
        </div>
      </template>
    </DashboardItem>
    <DashboardItem class="card" headerText="Supported Protocols" />
    <DashboardItem class="card" headerText="Proof of participation" />
    <DashboardItem class="card" headerText="Supported vEth2 pools" />
    <DashboardItem class="card" headerText="SGT price" />
  </div>
</template>

<script>
import DashboardItem from "./DashboardItem"

export default {
  components: { DashboardItem }
}
</script>

<style scoped>
.grid-container {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;

  grid-template-areas:
    'card1'
    'card2'
    'card3'
    'card4'
    'card5'
    'card6'
    'card7'
    'card8'
    'card9';
  height: 100vh;
}

.card:first-child {
  grid-area: card1;
}
.card:nth-child(2) {
  grid-area: card2;
}
.card:nth-child(3) {
  grid-area: card3;
}
.card:nth-child(4) {
  grid-area: card4;
}
.card:nth-child(5) {
  grid-area: card5;
}
.card:nth-child(6) {
  grid-area: card6;
}
.card:nth-child(7) {
  grid-area: card7;
}
.card:nth-child(8) {
  grid-area: card8;
}
.card:nth-child(9) {
  grid-area: card9;
}

/* responsive layout */
@media only screen and (min-width: 750px) {
  .grid-container {
    width: 70%;
    margin: 8vh auto 0 auto;
    display: grid;
    grid-template-areas:
      'card1 card2 card3 card4'
      'card5 card5 card6 card7'
      'card5 card5 card8 card9';
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
    grid-gap: 4px;
  }
}
</style>