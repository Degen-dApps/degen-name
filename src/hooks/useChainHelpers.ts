import { ethers } from 'ethers';

export default function useChainHelpers() {

  function getChainName(chainId) {
    let chain = chains.find(chain => chain.chainId == chainId);

    if (chain) {
      return chain.name;
    }
    
    return "Unsupported Network";
  }

  function getFallbackProvider(networkId) {
    let chain = chains.find(chain => chain.chainId == networkId);
    let urls = [chain.rpc1];

    if (urls) {
      const providers = urls.map(url => new ethers.providers.JsonRpcProvider(url));
      return new ethers.providers.FallbackProvider(providers, 1); // return fallback provider
    } else {
      return null;
    }
  }

  function getRpcByChainId(chainId) {
    let chain = chains.find(chain => chain.chainId == chainId);
    return chain.rpc1;
  }

  async function switchOrAddChain(ethereum, networkName) {
    // get network id from chains
    let chain = chains.find(chain => chain.name == networkName);
    let chainId = chain.chainId;

    try {
      await ethereum.request({
        "method": "wallet_switchEthereumChain",
        "params": [
          {
            "chainId": ethers.utils.hexValue(chainId)
          }
        ]
      });
    } catch (error) {
      if (error.code === 4902) {
        await ethereum.request({
          "method": "wallet_addEthereumChain",
          "params": [
            {
              "chainId": ethers.utils.hexValue(chainId),
              "chainName": networkName,
              "nativeCurrency": {
                "name": chain.currency,
                "symbol": chain.currency,
                "decimals": 18
              },
              "rpcUrls": [chain.rpc2],
              "blockExplorerUrls": [chain.blockExplorer]
            }
          ]
        });
      }
    }
  }

  // RETURN
  return {
    getChainName,
    getFallbackProvider,
    getRpcByChainId,
    switchOrAddChain
  }
}

const chains = [
  { 
    chainId: 666666666, 
    name: "Degen", 
    currency: "DEGEN", 
    rpc1: "https://degen-mainnet.g.alchemy.com/v2/Vn3jRzC23Ej4LYpz_TVNs20T9r-LigaO", 
    rpc2: "https://rpc.degen.tips", 
    blockExplorer: "https://explorer.degen.tips"
  }
];