<template>
  <div class="row">
    <div class="col-md-12 mt-3">
      <div class="container text-center">
        <h3>Integrations</h3>

        <p>
          You can use .degen names in many apps and services. Here are some of them to get you started.
        </p>

        <div class="row row-cols-1 mt-3 row-cols-md-4 g-4">

          <div class="col cursor-pointer" @click="openUrl('https://nftdegen.lol/')">
            <div class="card h-100 border-0">
              <img src="../assets/integrations/nftdegen.png" class="card-img-top" alt="NFTdegen">
              <div class="card-body">
                <h5 class="card-title">NFTdegen</h5>
                <p class="card-text">
                  NFT launchpad and marketplace on Degen Chain
                </p>
              </div>
            </div>
          </div>

          <div class="col cursor-pointer" @click="openUrl('https://dex.swapdegen.tips/#/swap')">
            <div class="card h-100 border-0">
              <img src="../assets/integrations/degenswap.png" class="card-img-top" alt="DegenSwap">
              <div class="card-body">
                <h5 class="card-title">DegenSwap</h5>
                <p class="card-text">
                  The biggest decentralized exchange on Degen Chain
                </p>
              </div>
            </div>
          </div>
          
          <div class="col cursor-pointer" @click="openUrl('https://degen.poidh.xyz/')">
            <div class="card h-100 border-0">
              <img src="../assets/integrations/poidh.png" class="card-img-top" alt="POIDH">
              <div class="card-body">
                <h5 class="card-title">poidh</h5>
                <p class="card-text">
                  A unique bounty platform for Degen Chain
                </p>
              </div>
            </div>
          </div>
          
          <div class="col cursor-pointer" @click="openUrl('https://payflow.me/')">
            <div class="card h-100 border-0">
              <img src="../assets/integrations/payflow.png" class="card-img-top" alt="Payflow">
              <div class="card-body">
                <h5 class="card-title">Payflow</h5>
                <p class="card-text">
                  On-chain social payments ecosystem
                </p>
              </div>
            </div>
          </div>
          
          <div class="col cursor-pointer" @click="openUrl('https://send2.name/')">
            <div class="card h-100 border-0">
              <img src="../assets/integrations/send2name.png" class="card-img-top" alt="Send2.name">
              <div class="card-body">
                <h5 class="card-title">Send2.name</h5>
                <p class="card-text">
                  Send tokens to any web3 name on any chain
                </p>
              </div>
            </div>
          </div>
          
          <div class="col cursor-pointer" @click="openUrl('https://portal.robotandkid.com/')">
            <div class="card h-100 border-0">
              <img src="../assets/integrations/theportal.png" class="card-img-top" alt="The Portal">
              <div class="card-body">
                <h5 class="card-title">The Portal</h5>
                <p class="card-text">
                  Interactive game-like experience for Degen Chain
                </p>
              </div>
            </div>
          </div>
          
          <div class="col cursor-pointer" @click="openUrl('https://exchange.frogswap.xyz/#/swap')">
            <div class="card h-100 border-0">
              <img src="../assets/integrations/frogswap.png" class="card-img-top" alt="FrogSwap">
              <div class="card-body">
                <h5 class="card-title">FrogSwap</h5>
                <p class="card-text">
                  Decentralized exchange and farm on Degen Chain
                </p>
              </div>
            </div>
          </div>
          
          <div class="col cursor-pointer" @click="openUrl('https://farcaster.vote/app#/profile')">
            <div class="card h-100 border-0">
              <img src="../assets/integrations/farcaster-vote.png" class="card-img-top" alt="Farcaster.vote">
              <div class="card-body">
                <h5 class="card-title">Farcaster.vote</h5>
                <p class="card-text">
                  Voting service for Degen Chain communities on Farcaster
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Integrations",

  methods: {
    openUrl(url) {
      window.open(url, '_blank').focus();
    }
  }
}
</script>