<template>
  <div class="grid-container">
    <TotalEthStaked class="card" :totalEther="20340"/>
    <ExitPoolLiquidity class="card" :exitLiquidity="3634" />
    <ProtocolsInvested class="card" :protocolCount="18" />
    <TotalStakers class="card" :stakerCount="5703" />
    <VEth2Profits class="card" :profits="47.57" />
    <SupportedProtocols class="card" :protocolCount="137" />
    <ProofOfParticipation class="card" :participationCount="1" />
    <SupportedvEth2Pools class="card" :poolCount="377" />
    <SgtPrice class="card" :price="50" />
  </div>
</template>

<script>
import TotalEthStaked from "./Gauges/TotalEthStaked";
import ExitPoolLiquidity from "./Gauges/ExitPoolLiquidity"
import ProtocolsInvested from "./Gauges/ProtocolsInvested"
import TotalStakers from "./Gauges/TotalStakers"
import VEth2Profits from "./Gauges/VEth2Profits"
import SupportedProtocols from "./Gauges/SupportedProtocols"
import ProofOfParticipation from "./Gauges/ProofOfParticipation"
import SupportedvEth2Pools from "./Gauges/SupportedvEth2Pools"
import SgtPrice from "./Gauges/SgtPrice"

export default {
  components: { 
    TotalEthStaked, 
    ExitPoolLiquidity,
    ProtocolsInvested,
    TotalStakers,
    VEth2Profits,
    SupportedProtocols,
    ProofOfParticipation,
    SupportedvEth2Pools,
    SgtPrice
  }
}
</script>

<style scoped>
.grid-container {
  margin: 5vh auto 0 auto;
  width: 90%;
  grid-gap: 10px;
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
@media only screen and (min-width: 768px) {
  .grid-container {
    width: 70%;
    margin: 8vh auto 0 auto;
    display: grid;
    grid-template-areas:
      'card1 card2'
      'card3 card4'
      'card5 card5'
      'card5 card5'
      'card6 card7'
      'card8 card9';
    grid-template-columns: 1fr 1fr;
    grid-gap: 4px;
  }
}

@media only screen and (min-width: 1024px) {
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