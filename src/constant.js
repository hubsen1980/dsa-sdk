module.exports.address = {
  genesis: "0x0000000000000000000000000000000000000000",
  core: {
    index: "0x2971AdFa57b20E5a416aE5a708A8655A9c74f723",
    list: "0x4c8a1BEb8a87765788946D6B19C6C6355194AbEb",
  },
  connectors: {
    basic: "0x9370236a085A99Aa359f4bD2f0424b8c3bf25C99",
    auth: "0x627cd0DbD5eE33F8456Aa8143aCd68a13d641588",
    compound: "0x547f1508A2a1AB0cB84DCe4b3e09beB560Bb44Cb",
    makerdao: "0x0a7493f31a23Ff79Eda30B12e6BA49f011B06e36",
  },
  resolvers: {
    core: "0xD6fB4fd8b595d0A1dE727C35fe6F1D4aE5B60F51",
    compound: "0xe2d035519f0247ed4b946f0ab74e8347052c020f",
    maker: "0x8af8aD861337456375604d482D9B9594540C7611"
  },
  read: {
    compound: "0xe2d035519f0247ed4b946f0ab74e8347052c020f",
    makerdao: "0x8af8aD861337456375604d482D9B9594540C7611"
  }
};

module.exports.ABI = {
  core: {
    index: require("./abi/core/index.json"),
    list: require("./abi/core/list.json"),
    account: require("./abi/core/account.json")
  },
  resolvers: {
    core: require("./abi/resolvers/core.json")
  },
  connectors: {
    basic: require("./abi/connectors/basic.json"),
    auth: require("./abi/connectors/auth.json"),
    compound: require("./abi/connectors/compound.json")
  },
  read: {
    compound: require("./abi/read/compound.json"),
    makerdao: require("./abi/read/makerdao.json"),
  }
};

module.exports.token = {
  eth: {
    symbol: "ETH",
    name: "Ethereum",
    address: "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",
    decimals: 18,
    raw: true
  },
  dai: {
    symbol: "DAI",
    name: "DAI Stable",
    address: "0x6B175474E89094C44Da98b954EedeAC495271d0F",
    decimals: 18,
    raw: true
  },
  usdc: {
    symbol: "USDC",
    name: "USD Coin",
    address: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
    decimals: 6,
    raw: true
  },
  sai: {
    symbol: "SAI",
    name: "SAI Stable",
    address: "0x89d24a6b4ccb1b6faa2625fe562bdd9a23260359",
    decimals: 18,
    raw: true
  },
  mkr: {
    symbol: "MKR",
    name: "MakerDAO",
    address: "0x9f8f72aa9304c8b593d555f12ef6589cc3a579a2",
    decimals: 18,
    raw: true
  },
  zrx: {
    symbol: "ZRX",
    name: "0x Protocol",
    address: "0xe41d2489571d322189246dafa5ebde1f4699f498",
    decimals: 18,
    raw: true
  },
  rep: {
    symbol: "REP",
    name: "Augur",
    address: "0x1985365e9f78359a9b6ad760e32412f4a445e862",
    decimals: 18,
    raw: true
  },
  tusd: {
    symbol: "TUSD",
    name: "TrueUSD",
    address: "0x8dd5fbCe2F6a956C3022bA3663759011Dd51e73E",
    decimals: 18,
    raw: true
  },
  bat: {
    symbol: "BAT",
    name: "Basic Att.",
    address: "0x0d8775f648430679a709e98d2b0cb6250d2887ef",
    decimals: 18,
    raw: true
  },
  knc: {
    symbol: "KNC",
    name: "Kyber Network",
    address: "0xdd974d5c2e2928dea5f71b9825b8b646686bd200",
    decimals: 18,
    raw: true
  },
  wbtc: {
    symbol: "WBTC",
    name: "Wrapped BTC",
    address: "0x2260fac5e5542a773aa44fbcfedf7c193bc2c599",
    decimals: 8,
    raw: true
  },
  ceth: {
    symbol: "CETH",
    name: "Compound ETH",
    address: "0x4ddc2d193948926d02f9b1fe9e1daa0718270ed5",
    decimals: 8,
    cFactor: 0.75,
    compound: true
  },
  cdai: {
    symbol: "CDAI",
    name: "Compound DAI",
    address: "0x5d3a536E4D6DbD6114cc1Ead35777bAB948E3643",
    decimals: 8,
    cFactor: 0.75,
    compound: true
  },
  cusdc: {
    symbol: "CUSDC",
    name: "Compound USDC",
    address: "0x39aa39c021dfbae8fac545936693ac917d5e7563",
    decimals: 8,
    cFactor: 0.75,
    compound: true
  },
  csai: {
    symbol: "CSAI",
    name: "Compound SAI",
    address: "0xf5dce57282a584d2746faf1593d3121fcac444dc",
    decimals: 8,
    cFactor: 0,
    compound: true
  },
  czrx: {
    symbol: "CZRX",
    name: "Compound ZRX",
    address: "0xb3319f5d18bc0d84dd1b4825dcde5d5f7266d407",
    decimals: 8,
    cFactor: 0.6,
    compound: true
  },
  crep: {
    symbol: "CREP",
    name: "Compound REP",
    address: "0x158079ee67fce2f58472a96584a73c7ab9ac95c1",
    decimals: 8,
    cFactor: 0.4,
    compound: true
  },
  cbat: {
    symbol: "CBAT",
    name: "Compound BAT",
    address: "0x6c8c6b02e7b2be14d4fa6022dfd6d75921d90e4e",
    decimals: 8,
    cFactor: 0.6,
    compound: true
  },
  cwbtc: {
    symbol: "CWBTC",
    name: "Compound WBTC",
    address: "0xc11b1268c1a384e55c48c2391d8d480264a3a7f4",
    decimals: 8,
    cFactor: 0,
    compound: true
  }
};
