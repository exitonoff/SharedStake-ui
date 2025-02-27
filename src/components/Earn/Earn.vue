<template>
  <div class="EarnWrapper">
    <div class="Earn">
      <div style="margin-top: 10px">
        <div class="notification">
            SharedStake suffered a rug pull on 23th of June 2021. Please read 
          <a
            href="https://sharedstake.medium.com/post-mortem-of-the-sharedstake-incident-4625eeacc61f"
            target="_blank"
            rel="noopener noreferrer"
            class=""
          >
            the post-mortem ↗
          </a> and proceed with extreme care.
        </div>
      </div>
      <geyser
        class="geyser"
        v-for="pool in pools"
        :pool="pool"
        v-bind:key="pool.name"
        :chosen="chosen === pool.name"
        @toggle="chosen = chosen == pool.name ? null : pool.name"
      />
      <newGeyser
        class="geyser"
        v-for="pool in newPools"
        :pool="pool"
        v-bind:key="pool.name"
        :chosen="chosen === pool.name"
        @toggle="chosen = chosen == pool.name ? null : pool.name"
      />
      <Claim />
    </div>
  </div>
</template>

<script>
import BN from "bignumber.js";
import { mapGetters } from "vuex";
import geyser from "./geyser.vue";
import newGeyser from "./geyserV2.vue";
import {
  SGT,
  vEth2,
  SGT_uniswap,
  geyser_vEth2,
  geyser_SGT,
  geyser_SGT_uniswap,
  vEth2_saddle,
  geyser_vEth2_saddle,
  SGT_vEth2_uniswap,
  geyser_SGT_vEth2_uniswap,
  oldPools,
} from "@/contracts";
import Claim from "./claim.vue";
import { vEth2Price } from "@/utils/veth2.js";

export default {
  components: { geyser, Claim, newGeyser },
  data: () => ({
    chosen: null,
    pools: [
      // Note that order of these pools affects functionality in mounted-lifetime method.
      // TODO: Make these order agnostic by maybe maping the pools in mounted() with pool name.
      {
        name: "SGT",
        pic: "tokens/logo-red.svg",
        explanation: "SharedStake Governance",
        token: SGT,
        geyser: geyser_SGT,
        locked: BN(39000),
        external: false,
        active: true,
        tokenPerSgt: 1,
        oldPool: oldPools["geyser_SGT"],
        link:
          "https://v2.info.uniswap.org/token/0x84810bcf08744d5862b8181f12d17bfd57d3b078", //for inactive pools => change this to uniswap
      },
      {
        name: "SGT - Eth",
        explanation: "on uniswap",
        pic: "tokens/SGT LP.png",
        token: SGT_uniswap,
        geyser: geyser_SGT_uniswap,
        locked: BN(90000),
        external: false,
        active: true,
        tokenPerSgt: 0,
        oldPool: oldPools["geyser_SGT_uniswap"],
        link:
          "https://v2.info.uniswap.org/pair/0x3d07f6e1627da96b8836190de64c1aed70e3fc55", //for inactive pools => change this to uniswap
      },
      {
        name: "SGT - vEth2",
        explanation: "on uniswap",
        pic: "tokens/SGT LP.png",
        token: SGT_vEth2_uniswap,
        geyser: geyser_SGT_vEth2_uniswap,
        locked: BN(87500),
        external: false,
        active: true,
        tokenPerSgt: 0,
        link:
          "https://v2.info.uniswap.org/pair/0xc794746df95c4b7043e8d6b521cfecab1b14c6ce", //for inactive pools => change this to uniswap
      },
      {
        name: "vEth2",
        explanation: "validator ETH2",
        pic: "vEth2_1.png",
        token: vEth2,
        geyser: geyser_vEth2,
        locked: BN(39000),
        external: false,
        active: true,
        tokenPerSgt: 0,
        oldPool: oldPools["geyser_vEth2"],

        link: "https://www.sharedstake.org/stake", //for inactive pools
      },
    ],
    newPools: [
      {
        name: "vEth2 - wEth",
        explanation: "on saddle",
        pic: "tokens/saddle.svg",
        token: vEth2_saddle,
        geyser: geyser_vEth2_saddle,
        locked: BN(24000),
        external: false,
        active: true,
        tokenPerSgt: 0,
        oldPool: oldPools["geyser_vEth2_saddle"],
        link: "https://saddle.exchange/#/pools/veth2/deposit", //for inactive pools => change this to uniswap
      },
    ],
  }),
  computed: {
    ...mapGetters({ userAddress: "userAddress" }),
  },
  mounted: async function () {
    await this.mounted();
  },
  watch: {
    async userAddress(newVal) {
      if (newVal) await this.mounted;
      console.log(newVal);
    },
  },
  methods: {
    async mounted() {
      if (this.pools[1].active) {
        let token = SGT_uniswap;
        let uniswapEthSgtReserves = await token.methods.getReserves().call();
        let sgtOnUniswapLP = uniswapEthSgtReserves[0];
        let ethOnUniswapLP = uniswapEthSgtReserves[1];

        const ethPerSgtFromUniswap = ethOnUniswapLP / sgtOnUniswapLP;
        //get vEth2 price from saddle pool
        let vEth2Pr = await vEth2Price();
        vEth2Pr = vEth2Pr.dividedBy(1e18).toFixed(2).toString();

        this.pools[3].tokenPerSgt = ethPerSgtFromUniswap * vEth2Pr;
        this.newPools[0].tokenPerSgt = ethPerSgtFromUniswap; //saddle pool's LP token is simply 1 eth => possible improvement = get more accurate approach

        let totalSupply = await token.methods.totalSupply().call();

        const uniswapEthSgtLpTokenPerSgt = totalSupply / (sgtOnUniswapLP * 2); // Approximation
        this.pools[1].tokenPerSgt = uniswapEthSgtLpTokenPerSgt;
      }
      if (this.pools[2].active) {
        let token = SGT_vEth2_uniswap;
        let reserves = await token.methods.getReserves().call();
        let sgtOnUniswapLP = reserves[0];

        // pool 2
        let totalSupply = await token.methods.totalSupply().call();
        const unsiwapvEth2SgtLPTokenPerSgt = totalSupply / (sgtOnUniswapLP * 2);
        this.pools[2].tokenPerSgt = unsiwapvEth2SgtLPTokenPerSgt;
      }
    },
  },
};
</script>

<style scoped>
.EarnWrapper {
  font-family: "Work Sans";
  padding-top: 100px;
  padding-bottom: 5vh;
}
.Earn {
  scroll-behavior: smooth;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}
span {
  text-align: left;
  font-size: 18px;
}
.logo {
  color: rgb(250, 82, 160);
  font-size: 22px;
}

.notification {
  width: 90%;
  margin-top: 50px;
  padding: 0;
  text-align: center;
  color: tomato;
  font-size: 24px;
}
</style>