import { Chain } from 'wagmi'

export const mantleTestnet = {
  id: 5001,
  name: "Mantle",
  network: "mantle",
  nativeCurrency: {
    decimals: 18,
    name: "Mantle",
    symbol: "BIT",
  },
  rpcUrls: {
    public: { http: ['https://rpc.testnet.mantle.xyz'] },
    default: {
      http: ["https://rpc.testnet.mantle.xyz"],
    },
  },
  blockExplorers: {
    default: { name: "Wadsley", url: "https://explorer.testnet.mantle.xyz/" },
    etherscan: { name: "Wadsley", url: "https://explorer.testnet.mantle.xyz/" },
  },
  testnet: true,
} as const satisfies Chain