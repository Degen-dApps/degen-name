<template>
  <div class="container-fluid text-center mt-3">
    <router-link v-if="isActivated && isNetworkSupported" to="/profile">Profile</router-link>
    
    <span v-if="isActivated && isNetworkSupported"> | </span>

    <router-link v-if="isActivated && isNetworkSupported" to="/send-tokens">Send Tokens</router-link>
    <span v-if="isActivated && isNetworkSupported"> | </span>

    <router-link v-if="isUserMinterAdmin || isUserRoyaltyFeeUpdater || isUserTldAdmin" to="/admin">Admin</router-link>
    <span v-if="isUserMinterAdmin || isUserRoyaltyFeeUpdater || isUserTldAdmin"> | </span>

    <span v-if="!isActivated">
      <span class="cursor-pointer" @click="clearStorage">Clear storage</span> | 
    </span>

    <a target="_blank" href="https://degen.tips">Built for Degens</a> |
    <a target="_blank" href="https://gist.github.com/tempe-techie/2e14a9371aa40a286a8442e03ae7c8cf">Integrate .degen names</a>
  </div>

  <div class="container-fluid text-center">

    <a class="icons" href="http://docs.punk.domains" target="_blank"><i class="bi bi-journal-text"></i></a>

    <a class="icons" target="_blank" href="https://github.com/Degen-dApps/degen-name"><i class="bi bi-github"></i></a>

    <a class="icons" target="_blank" href="https://warpcast.com/~/channel/degen-name"><i class="bi bi-chat"></i></a>
    
  </div>
</template>

<script>
import { useEthers } from 'vue-dapp';
import { mapGetters } from 'vuex';

export default {
  name: "Footer",

  computed: {
    ...mapGetters("network", ["isNetworkSupported"]),
    ...mapGetters("user", ["isUserMinterAdmin", "isUserTldAdmin", "isUserRoyaltyFeeUpdater"]),
    
  },

  methods: {
    clearStorage() {
      localStorage.clear();
      sessionStorage.clear();
      // clear cookies
      document.cookie.split(";").forEach((c) => {
        document.cookie = c
          .replace(/^ +/, "")
          .replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/");
      });
    },
  },

  setup() {
    const { isActivated } = useEthers()
    return { isActivated }
  },
}
</script>

<style scoped>
a {
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}

.container-fluid {
  /*background-color: #24263A;*/
  background-color: transparent;
  padding: 20px 0px;
  border-radius: 10px;
}

.icons {
  margin-left: 15px;
  margin-right: 15px;
  font-size: 2em;
}

.polygon {
  vertical-align: text-bottom;
  width: 40px;
}

.polygon svg circle {
  fill: #DBDFEA;
}

.polygon:hover svg circle {
  fill: white;
}
</style>