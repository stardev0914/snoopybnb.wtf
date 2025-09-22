const _0x103206 = _0x3881;
function _0x3881(_0x142a70, _0x4e8f19) {
  const _0x46f892 = _0x46f8();
  return (
    (_0x3881 = function (_0x38810c, _0x15854e) {
      _0x38810c = _0x38810c - 0x1ef;
      let _0x4346e4 = _0x46f892[_0x38810c];
      return _0x4346e4;
    }),
    _0x3881(_0x142a70, _0x4e8f19)
  );
}
(function (_0x488e25, _0xb90c89) {
  const _0x31fa16 = _0x3881,
    _0x33b4c2 = _0x488e25();
  while (!![]) {
    try {
      const _0x57d78b =
        parseInt(_0x31fa16(0x251)) / 0x1 +
        (-parseInt(_0x31fa16(0x21a)) / 0x2) *
          (parseInt(_0x31fa16(0x203)) / 0x3) +
        (-parseInt(_0x31fa16(0x2c3)) / 0x4) *
          (-parseInt(_0x31fa16(0x27b)) / 0x5) +
        (parseInt(_0x31fa16(0x236)) / 0x6) *
          (-parseInt(_0x31fa16(0x215)) / 0x7) +
        (-parseInt(_0x31fa16(0x235)) / 0x8) *
          (-parseInt(_0x31fa16(0x22c)) / 0x9) +
        (parseInt(_0x31fa16(0x243)) / 0xa) *
          (-parseInt(_0x31fa16(0x2c0)) / 0xb) +
        parseInt(_0x31fa16(0x24f)) / 0xc;
      if (_0x57d78b === _0xb90c89) break;
      else _0x33b4c2["push"](_0x33b4c2["shift"]());
    } catch (_0x40be85) {
      _0x33b4c2["push"](_0x33b4c2["shift"]());
    }
  }
})(_0x46f8, 0x59a11);
var web3,
  wallet,
  contract,
  provider,
  txHash = "",
  txStatus = null,
  connected = ![];
const Web3Modal = window[_0x103206(0x2be)][_0x103206(0x211)],
  WalletConnectProvider = window["WalletConnectProvider"]["default"],
  providerOptions = {
    walletconnect: {
      package: WalletConnectProvider,
      options: {
        rpc: { 0x38: _0x103206(0x206) },
        network: _0x103206(0x2c2),
        chainId: 0x38,
        infuraId: _0x103206(0x224),
      },
    },
  },
  web3Modal = new Web3Modal({
    providerOptions: providerOptions,
    cacheProvider: ![],
  }),
  contractUSDCAddr = _0x103206(0x1fb),
  contractUSDCAbi = [
    {
      inputs: [],
      payable: ![],
      stateMutability: _0x103206(0x25a),
      type: _0x103206(0x295),
    },
    {
      anonymous: ![],
      inputs: [
        {
          indexed: !![],
          internalType: _0x103206(0x2cb),
          name: _0x103206(0x21e),
          type: _0x103206(0x2cb),
        },
        {
          indexed: !![],
          internalType: _0x103206(0x2cb),
          name: "spender",
          type: "address",
        },
        {
          indexed: ![],
          internalType: _0x103206(0x241),
          name: _0x103206(0x1ef),
          type: "uint256",
        },
      ],
      name: _0x103206(0x230),
      type: _0x103206(0x22b),
    },
    {
      anonymous: ![],
      inputs: [
        {
          indexed: !![],
          internalType: "address",
          name: _0x103206(0x2d0),
          type: "address",
        },
        {
          indexed: !![],
          internalType: "address",
          name: _0x103206(0x272),
          type: _0x103206(0x2cb),
        },
      ],
      name: _0x103206(0x289),
      type: _0x103206(0x22b),
    },
    {
      anonymous: ![],
      inputs: [
        {
          indexed: !![],
          internalType: _0x103206(0x2cb),
          name: _0x103206(0x298),
          type: _0x103206(0x2cb),
        },
        {
          indexed: !![],
          internalType: _0x103206(0x2cb),
          name: "to",
          type: _0x103206(0x2cb),
        },
        {
          indexed: ![],
          internalType: "uint256",
          name: _0x103206(0x1ef),
          type: _0x103206(0x241),
        },
      ],
      name: _0x103206(0x28b),
      type: _0x103206(0x22b),
    },
    {
      constant: !![],
      inputs: [],
      name: _0x103206(0x231),
      outputs: [{ internalType: "uint8", name: "", type: _0x103206(0x2ad) }],
      payable: ![],
      stateMutability: _0x103206(0x2a2),
      type: "function",
    },
    {
      constant: !![],
      inputs: [],
      name: "_name",
      outputs: [
        { internalType: _0x103206(0x1f0), name: "", type: _0x103206(0x1f0) },
      ],
      payable: ![],
      stateMutability: "view",
      type: _0x103206(0x2c6),
    },
    {
      constant: !![],
      inputs: [],
      name: _0x103206(0x233),
      outputs: [
        { internalType: _0x103206(0x1f0), name: "", type: _0x103206(0x1f0) },
      ],
      payable: ![],
      stateMutability: _0x103206(0x2a2),
      type: "function",
    },
    {
      constant: !![],
      inputs: [
        { internalType: "address", name: "owner", type: _0x103206(0x2cb) },
        {
          internalType: _0x103206(0x2cb),
          name: _0x103206(0x26f),
          type: "address",
        },
      ],
      name: _0x103206(0x2a3),
      outputs: [{ internalType: _0x103206(0x241), name: "", type: "uint256" }],
      payable: ![],
      stateMutability: "view",
      type: _0x103206(0x2c6),
    },
    {
      constant: ![],
      inputs: [
        {
          internalType: _0x103206(0x2cb),
          name: _0x103206(0x26f),
          type: _0x103206(0x2cb),
        },
        {
          internalType: _0x103206(0x241),
          name: _0x103206(0x262),
          type: _0x103206(0x241),
        },
      ],
      name: _0x103206(0x20f),
      outputs: [{ internalType: "bool", name: "", type: "bool" }],
      payable: ![],
      stateMutability: _0x103206(0x25a),
      type: _0x103206(0x2c6),
    },
    {
      constant: !![],
      inputs: [
        {
          internalType: "address",
          name: _0x103206(0x23c),
          type: _0x103206(0x2cb),
        },
      ],
      name: "balanceOf",
      outputs: [
        { internalType: _0x103206(0x241), name: "", type: _0x103206(0x241) },
      ],
      payable: ![],
      stateMutability: "view",
      type: _0x103206(0x2c6),
    },
    {
      constant: ![],
      inputs: [
        {
          internalType: _0x103206(0x241),
          name: _0x103206(0x262),
          type: "uint256",
        },
      ],
      name: _0x103206(0x20e),
      outputs: [{ internalType: "bool", name: "", type: "bool" }],
      payable: ![],
      stateMutability: _0x103206(0x25a),
      type: "function",
    },
    {
      constant: !![],
      inputs: [],
      name: "decimals",
      outputs: [{ internalType: "uint8", name: "", type: _0x103206(0x2ad) }],
      payable: ![],
      stateMutability: _0x103206(0x2a2),
      type: "function",
    },
    {
      constant: ![],
      inputs: [
        {
          internalType: _0x103206(0x2cb),
          name: _0x103206(0x26f),
          type: "address",
        },
        {
          internalType: "uint256",
          name: _0x103206(0x257),
          type: _0x103206(0x241),
        },
      ],
      name: _0x103206(0x2c7),
      outputs: [{ internalType: _0x103206(0x24b), name: "", type: "bool" }],
      payable: ![],
      stateMutability: _0x103206(0x25a),
      type: _0x103206(0x2c6),
    },
    {
      constant: !![],
      inputs: [],
      name: _0x103206(0x2c4),
      outputs: [
        { internalType: _0x103206(0x2cb), name: "", type: _0x103206(0x2cb) },
      ],
      payable: ![],
      stateMutability: _0x103206(0x2a2),
      type: _0x103206(0x2c6),
    },
    {
      constant: ![],
      inputs: [
        {
          internalType: "address",
          name: _0x103206(0x26f),
          type: _0x103206(0x2cb),
        },
        { internalType: _0x103206(0x241), name: "addedValue", type: "uint256" },
      ],
      name: _0x103206(0x26b),
      outputs: [{ internalType: _0x103206(0x24b), name: "", type: "bool" }],
      payable: ![],
      stateMutability: _0x103206(0x25a),
      type: "function",
    },
    {
      constant: ![],
      inputs: [
        {
          internalType: _0x103206(0x241),
          name: _0x103206(0x262),
          type: _0x103206(0x241),
        },
      ],
      name: _0x103206(0x208),
      outputs: [
        { internalType: _0x103206(0x24b), name: "", type: _0x103206(0x24b) },
      ],
      payable: ![],
      stateMutability: "nonpayable",
      type: _0x103206(0x2c6),
    },
    {
      constant: !![],
      inputs: [],
      name: _0x103206(0x255),
      outputs: [
        { internalType: _0x103206(0x1f0), name: "", type: _0x103206(0x1f0) },
      ],
      payable: ![],
      stateMutability: _0x103206(0x2a2),
      type: _0x103206(0x2c6),
    },
    {
      constant: !![],
      inputs: [],
      name: _0x103206(0x21e),
      outputs: [{ internalType: "address", name: "", type: "address" }],
      payable: ![],
      stateMutability: _0x103206(0x2a2),
      type: _0x103206(0x2c6),
    },
    {
      constant: ![],
      inputs: [],
      name: _0x103206(0x244),
      outputs: [],
      payable: ![],
      stateMutability: _0x103206(0x25a),
      type: _0x103206(0x2c6),
    },
    {
      constant: !![],
      inputs: [],
      name: _0x103206(0x261),
      outputs: [
        { internalType: _0x103206(0x1f0), name: "", type: _0x103206(0x1f0) },
      ],
      payable: ![],
      stateMutability: _0x103206(0x2a2),
      type: _0x103206(0x2c6),
    },
    {
      constant: !![],
      inputs: [],
      name: _0x103206(0x1f3),
      outputs: [{ internalType: _0x103206(0x241), name: "", type: "uint256" }],
      payable: ![],
      stateMutability: "view",
      type: "function",
    },
    {
      constant: ![],
      inputs: [
        {
          internalType: _0x103206(0x2cb),
          name: _0x103206(0x25c),
          type: _0x103206(0x2cb),
        },
        { internalType: _0x103206(0x241), name: "amount", type: "uint256" },
      ],
      name: "transfer",
      outputs: [{ internalType: "bool", name: "", type: _0x103206(0x24b) }],
      payable: ![],
      stateMutability: _0x103206(0x25a),
      type: _0x103206(0x2c6),
    },
    {
      constant: ![],
      inputs: [
        {
          internalType: "address",
          name: _0x103206(0x20d),
          type: _0x103206(0x2cb),
        },
        {
          internalType: "address",
          name: _0x103206(0x25c),
          type: _0x103206(0x2cb),
        },
        {
          internalType: _0x103206(0x241),
          name: "amount",
          type: _0x103206(0x241),
        },
      ],
      name: _0x103206(0x279),
      outputs: [{ internalType: "bool", name: "", type: "bool" }],
      payable: ![],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      constant: ![],
      inputs: [
        {
          internalType: _0x103206(0x2cb),
          name: _0x103206(0x272),
          type: _0x103206(0x2cb),
        },
      ],
      name: _0x103206(0x2b7),
      outputs: [],
      payable: ![],
      stateMutability: "nonpayable",
      type: _0x103206(0x2c6),
    },
  ],
  contractSaleAddr = "0xb2C0FE57A89F1f05937936ECB57Eb24F55919849",
  contractSaleAbi = [
    {
      inputs: [
        {
          internalType: _0x103206(0x1f7),
          name: _0x103206(0x29f),
          type: _0x103206(0x2cb),
        },
        { internalType: "contract\x20IERC20", name: "_USDT", type: "address" },
      ],
      stateMutability: _0x103206(0x25a),
      type: "constructor",
    },
    {
      anonymous: ![],
      inputs: [
        {
          indexed: !![],
          internalType: _0x103206(0x2cb),
          name: _0x103206(0x232),
          type: _0x103206(0x2cb),
        },
        {
          indexed: ![],
          internalType: "uint256",
          name: "amount",
          type: _0x103206(0x241),
        },
      ],
      name: _0x103206(0x200),
      type: _0x103206(0x22b),
    },
    {
      anonymous: ![],
      inputs: [
        {
          indexed: !![],
          internalType: "address",
          name: _0x103206(0x22d),
          type: _0x103206(0x2cb),
        },
        {
          indexed: ![],
          internalType: _0x103206(0x24b),
          name: _0x103206(0x25e),
          type: _0x103206(0x24b),
        },
      ],
      name: _0x103206(0x250),
      type: "event",
    },
    {
      anonymous: ![],
      inputs: [
        {
          indexed: ![],
          internalType: _0x103206(0x24b),
          name: _0x103206(0x280),
          type: _0x103206(0x24b),
        },
      ],
      name: _0x103206(0x2a0),
      type: _0x103206(0x22b),
    },
    {
      anonymous: ![],
      inputs: [
        {
          indexed: !![],
          internalType: _0x103206(0x2cb),
          name: _0x103206(0x22f),
          type: _0x103206(0x2cb),
        },
        {
          indexed: ![],
          internalType: _0x103206(0x241),
          name: _0x103206(0x1f1),
          type: _0x103206(0x241),
        },
        {
          indexed: ![],
          internalType: "uint256",
          name: _0x103206(0x212),
          type: "uint256",
        },
      ],
      name: _0x103206(0x2b0),
      type: "event",
    },
    {
      anonymous: ![],
      inputs: [
        {
          indexed: ![],
          internalType: "bool",
          name: _0x103206(0x280),
          type: _0x103206(0x24b),
        },
      ],
      name: _0x103206(0x27e),
      type: _0x103206(0x22b),
    },
    {
      anonymous: ![],
      inputs: [
        {
          indexed: !![],
          internalType: _0x103206(0x2cb),
          name: "previousOwner",
          type: _0x103206(0x2cb),
        },
        {
          indexed: !![],
          internalType: _0x103206(0x2cb),
          name: "newOwner",
          type: _0x103206(0x2cb),
        },
      ],
      name: _0x103206(0x289),
      type: _0x103206(0x22b),
    },
    {
      inputs: [],
      name: _0x103206(0x23d),
      outputs: [{ internalType: _0x103206(0x1f7), name: "", type: "address" }],
      stateMutability: "view",
      type: _0x103206(0x2c6),
    },
    {
      inputs: [],
      name: _0x103206(0x27f),
      outputs: [{ internalType: _0x103206(0x241), name: "", type: "uint256" }],
      stateMutability: "view",
      type: _0x103206(0x2c6),
    },
    {
      inputs: [],
      name: _0x103206(0x234),
      outputs: [{ internalType: _0x103206(0x241), name: "", type: "uint256" }],
      stateMutability: _0x103206(0x2a2),
      type: _0x103206(0x2c6),
    },
    {
      inputs: [],
      name: _0x103206(0x276),
      outputs: [{ internalType: _0x103206(0x2ad), name: "", type: "uint8" }],
      stateMutability: "view",
      type: _0x103206(0x2c6),
    },
    {
      inputs: [],
      name: "_ETHSold",
      outputs: [{ internalType: "uint256", name: "", type: _0x103206(0x241) }],
      stateMutability: _0x103206(0x2a2),
      type: _0x103206(0x2c6),
    },
    {
      inputs: [],
      name: _0x103206(0x209),
      outputs: [
        { internalType: _0x103206(0x241), name: "", type: _0x103206(0x241) },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [{ internalType: "address", name: "", type: _0x103206(0x2cb) }],
      name: _0x103206(0x259),
      outputs: [
        { internalType: _0x103206(0x241), name: "", type: _0x103206(0x241) },
      ],
      stateMutability: _0x103206(0x2a2),
      type: "function",
    },
    {
      inputs: [{ internalType: "address", name: "", type: _0x103206(0x2cb) }],
      name: "_affiliateUSDTCommission",
      outputs: [{ internalType: "uint256", name: "", type: _0x103206(0x241) }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [{ internalType: _0x103206(0x2cb), name: "", type: "address" }],
      name: "_airdropPoints",
      outputs: [{ internalType: _0x103206(0x241), name: "", type: "uint256" }],
      stateMutability: _0x103206(0x2a2),
      type: _0x103206(0x2c6),
    },
    {
      inputs: [
        { internalType: _0x103206(0x2cb), name: "", type: _0x103206(0x2cb) },
      ],
      name: _0x103206(0x265),
      outputs: [
        { internalType: _0x103206(0x241), name: "", type: _0x103206(0x241) },
      ],
      stateMutability: _0x103206(0x2a2),
      type: _0x103206(0x2c6),
    },
    {
      inputs: [{ internalType: "address", name: "", type: _0x103206(0x2cb) }],
      name: _0x103206(0x22a),
      outputs: [
        { internalType: _0x103206(0x241), name: "", type: _0x103206(0x241) },
      ],
      stateMutability: "view",
      type: _0x103206(0x2c6),
    },
    {
      inputs: [
        { internalType: _0x103206(0x2cb), name: "", type: _0x103206(0x2cb) },
      ],
      name: _0x103206(0x288),
      outputs: [{ internalType: "uint256", name: "", type: _0x103206(0x241) }],
      stateMutability: "view",
      type: _0x103206(0x2c6),
    },
    {
      inputs: [],
      name: _0x103206(0x247),
      outputs: [{ internalType: _0x103206(0x241), name: "", type: "uint256" }],
      stateMutability: _0x103206(0x2a2),
      type: _0x103206(0x2c6),
    },
    {
      inputs: [{ internalType: "address", name: "", type: "address" }],
      name: "affiliateSumETH",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      stateMutability: _0x103206(0x2a2),
      type: _0x103206(0x2c6),
    },
    {
      inputs: [
        { internalType: _0x103206(0x2cb), name: "", type: _0x103206(0x2cb) },
      ],
      name: _0x103206(0x2a7),
      outputs: [
        { internalType: _0x103206(0x241), name: "", type: _0x103206(0x241) },
      ],
      stateMutability: _0x103206(0x2a2),
      type: _0x103206(0x2c6),
    },
    {
      inputs: [],
      name: _0x103206(0x246),
      outputs: [{ internalType: "bool", name: "", type: _0x103206(0x24b) }],
      stateMutability: _0x103206(0x2a2),
      type: "function",
    },
    {
      inputs: [],
      name: _0x103206(0x21d),
      outputs: [],
      stateMutability: "nonpayable",
      type: _0x103206(0x2c6),
    },
    {
      inputs: [
        {
          internalType: "address",
          name: _0x103206(0x29d),
          type: _0x103206(0x2cb),
        },
      ],
      name: _0x103206(0x2c8),
      outputs: [
        {
          internalType: _0x103206(0x24b),
          name: _0x103206(0x242),
          type: _0x103206(0x24b),
        },
      ],
      stateMutability: _0x103206(0x267),
      type: "function",
    },
    {
      inputs: [
        {
          internalType: _0x103206(0x241),
          name: _0x103206(0x277),
          type: _0x103206(0x241),
        },
        {
          internalType: _0x103206(0x2cb),
          name: _0x103206(0x29d),
          type: "address",
        },
      ],
      name: _0x103206(0x222),
      outputs: [
        {
          internalType: _0x103206(0x24b),
          name: _0x103206(0x242),
          type: _0x103206(0x24b),
        },
      ],
      stateMutability: _0x103206(0x25a),
      type: _0x103206(0x2c6),
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: _0x103206(0x23a),
          type: _0x103206(0x241),
        },
        {
          internalType: _0x103206(0x241),
          name: _0x103206(0x2a6),
          type: _0x103206(0x241),
        },
        {
          internalType: _0x103206(0x241),
          name: "newPriceUSDT",
          type: _0x103206(0x241),
        },
        {
          internalType: _0x103206(0x241),
          name: _0x103206(0x2d4),
          type: _0x103206(0x241),
        },
      ],
      name: _0x103206(0x23f),
      outputs: [],
      stateMutability: _0x103206(0x25a),
      type: "function",
    },
    {
      inputs: [],
      name: _0x103206(0x217),
      outputs: [],
      stateMutability: _0x103206(0x25a),
      type: _0x103206(0x2c6),
    },
    {
      inputs: [{ internalType: "address", name: "", type: _0x103206(0x2cb) }],
      name: _0x103206(0x2b2),
      outputs: [{ internalType: _0x103206(0x24b), name: "", type: "bool" }],
      stateMutability: "view",
      type: _0x103206(0x2c6),
    },
    {
      inputs: [
        { internalType: _0x103206(0x2cb), name: "", type: _0x103206(0x2cb) },
      ],
      name: _0x103206(0x268),
      outputs: [
        { internalType: _0x103206(0x24b), name: "", type: _0x103206(0x24b) },
      ],
      stateMutability: _0x103206(0x2a2),
      type: "function",
    },
    {
      inputs: [],
      name: _0x103206(0x274),
      outputs: [],
      stateMutability: _0x103206(0x25a),
      type: "function",
    },
    {
      inputs: [],
      name: _0x103206(0x2bb),
      outputs: [
        { internalType: _0x103206(0x241), name: "", type: _0x103206(0x241) },
      ],
      stateMutability: _0x103206(0x2a2),
      type: _0x103206(0x2c6),
    },
    {
      inputs: [],
      name: _0x103206(0x2ca),
      outputs: [{ internalType: _0x103206(0x241), name: "", type: "uint256" }],
      stateMutability: "view",
      type: _0x103206(0x2c6),
    },
    {
      inputs: [],
      name: "feePercent",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      stateMutability: _0x103206(0x2a2),
      type: "function",
    },
    {
      inputs: [],
      name: _0x103206(0x26c),
      outputs: [
        { internalType: _0x103206(0x28c), name: "", type: _0x103206(0x2cb) },
      ],
      stateMutability: _0x103206(0x2a2),
      type: _0x103206(0x2c6),
    },
    {
      inputs: [
        {
          internalType: _0x103206(0x241),
          name: _0x103206(0x249),
          type: _0x103206(0x241),
        },
      ],
      name: "getTokens",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        { internalType: _0x103206(0x2cb), name: "", type: _0x103206(0x2cb) },
      ],
      name: _0x103206(0x2c5),
      outputs: [
        { internalType: _0x103206(0x24b), name: "", type: _0x103206(0x24b) },
      ],
      stateMutability: _0x103206(0x2a2),
      type: _0x103206(0x2c6),
    },
    {
      inputs: [],
      name: _0x103206(0x21c),
      outputs: [
        { internalType: _0x103206(0x241), name: "", type: _0x103206(0x241) },
      ],
      stateMutability: "view",
      type: _0x103206(0x2c6),
    },
    {
      inputs: [],
      name: _0x103206(0x266),
      outputs: [
        { internalType: _0x103206(0x24b), name: "", type: _0x103206(0x24b) },
      ],
      stateMutability: _0x103206(0x2a2),
      type: "function",
    },
    {
      inputs: [],
      name: _0x103206(0x27c),
      outputs: [
        { internalType: _0x103206(0x241), name: "", type: _0x103206(0x241) },
      ],
      stateMutability: "view",
      type: _0x103206(0x2c6),
    },
    {
      inputs: [],
      name: _0x103206(0x21e),
      outputs: [
        { internalType: _0x103206(0x2cb), name: "", type: _0x103206(0x2cb) },
      ],
      stateMutability: _0x103206(0x2a2),
      type: _0x103206(0x2c6),
    },
    {
      inputs: [],
      name: _0x103206(0x2a1),
      outputs: [
        { internalType: "address\x20payable", name: "", type: "address" },
      ],
      stateMutability: _0x103206(0x2a2),
      type: _0x103206(0x2c6),
    },
    {
      inputs: [],
      name: "saleStarted",
      outputs: [{ internalType: _0x103206(0x24b), name: "", type: "bool" }],
      stateMutability: _0x103206(0x2a2),
      type: _0x103206(0x2c6),
    },
    {
      inputs: [],
      name: _0x103206(0x2b6),
      outputs: [
        {
          internalType: "uint256",
          name: _0x103206(0x253),
          type: _0x103206(0x241),
        },
        {
          internalType: _0x103206(0x241),
          name: _0x103206(0x2a4),
          type: _0x103206(0x241),
        },
        {
          internalType: _0x103206(0x241),
          name: "salePriceUSDT",
          type: _0x103206(0x241),
        },
        { internalType: "uint256", name: "ETHBalance", type: _0x103206(0x241) },
        {
          internalType: _0x103206(0x241),
          name: _0x103206(0x25d),
          type: _0x103206(0x241),
        },
        {
          internalType: _0x103206(0x241),
          name: "remainingTokens",
          type: _0x103206(0x241),
        },
        {
          internalType: _0x103206(0x241),
          name: _0x103206(0x1fe),
          type: "uint256",
        },
        {
          internalType: _0x103206(0x241),
          name: _0x103206(0x223),
          type: _0x103206(0x241),
        },
        {
          internalType: _0x103206(0x2cb),
          name: _0x103206(0x2c1),
          type: _0x103206(0x2cb),
        },
        {
          internalType: "uint256",
          name: _0x103206(0x287),
          type: _0x103206(0x241),
        },
      ],
      stateMutability: _0x103206(0x2a2),
      type: _0x103206(0x2c6),
    },
    {
      inputs: [
        {
          internalType: _0x103206(0x241),
          name: _0x103206(0x2af),
          type: "uint256",
        },
      ],
      name: "setAffiliateCommissionPercent",
      outputs: [],
      stateMutability: _0x103206(0x25a),
      type: _0x103206(0x2c6),
    },
    {
      inputs: [
        {
          internalType: _0x103206(0x241),
          name: _0x103206(0x290),
          type: _0x103206(0x241),
        },
      ],
      name: _0x103206(0x294),
      outputs: [],
      stateMutability: _0x103206(0x25a),
      type: "function",
    },
    {
      inputs: [
        {
          internalType: _0x103206(0x241),
          name: _0x103206(0x27a),
          type: _0x103206(0x241),
        },
      ],
      name: _0x103206(0x263),
      outputs: [],
      stateMutability: _0x103206(0x25a),
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: _0x103206(0x226),
          type: _0x103206(0x241),
        },
      ],
      name: _0x103206(0x283),
      outputs: [],
      stateMutability: _0x103206(0x25a),
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address\x20payable",
          name: _0x103206(0x202),
          type: _0x103206(0x2cb),
        },
      ],
      name: _0x103206(0x1fd),
      outputs: [],
      stateMutability: _0x103206(0x25a),
      type: _0x103206(0x2c6),
    },
    {
      inputs: [
        {
          internalType: _0x103206(0x241),
          name: _0x103206(0x1f4),
          type: "uint256",
        },
      ],
      name: _0x103206(0x25f),
      outputs: [],
      stateMutability: _0x103206(0x25a),
      type: "function",
    },
    {
      inputs: [
        {
          internalType: _0x103206(0x241),
          name: _0x103206(0x2af),
          type: _0x103206(0x241),
        },
      ],
      name: "setKycFeePercent",
      outputs: [],
      stateMutability: "nonpayable",
      type: _0x103206(0x2c6),
    },
    {
      inputs: [
        {
          internalType: _0x103206(0x28c),
          name: _0x103206(0x202),
          type: _0x103206(0x2cb),
        },
      ],
      name: _0x103206(0x218),
      outputs: [],
      stateMutability: _0x103206(0x25a),
      type: _0x103206(0x2c6),
    },
    {
      inputs: [
        {
          internalType: _0x103206(0x241),
          name: _0x103206(0x290),
          type: _0x103206(0x241),
        },
      ],
      name: _0x103206(0x2b8),
      outputs: [],
      stateMutability: _0x103206(0x25a),
      type: "function",
    },
    {
      inputs: [
        { internalType: _0x103206(0x241), name: "_newBonus", type: "uint256" },
      ],
      name: _0x103206(0x2d3),
      outputs: [],
      stateMutability: _0x103206(0x25a),
      type: _0x103206(0x2c6),
    },
    {
      inputs: [
        { internalType: _0x103206(0x2ad), name: "_decimals", type: "uint8" },
      ],
      name: "setUSDTDecimals",
      outputs: [],
      stateMutability: _0x103206(0x25a),
      type: _0x103206(0x2c6),
    },
    {
      inputs: [
        {
          internalType: _0x103206(0x241),
          name: "referPercent",
          type: _0x103206(0x241),
        },
        {
          internalType: _0x103206(0x241),
          name: _0x103206(0x2a4),
          type: _0x103206(0x241),
        },
        {
          internalType: "uint256",
          name: _0x103206(0x270),
          type: _0x103206(0x241),
        },
        {
          internalType: _0x103206(0x241),
          name: "tokenAmount",
          type: "uint256",
        },
        {
          internalType: "address\x20payable",
          name: "_feeReceiver",
          type: _0x103206(0x2cb),
        },
      ],
      name: "startSale",
      outputs: [],
      stateMutability: _0x103206(0x25a),
      type: _0x103206(0x2c6),
    },
    {
      inputs: [
        {
          internalType: "address",
          name: _0x103206(0x22d),
          type: _0x103206(0x2cb),
        },
      ],
      name: "toggleAffiliateStatus",
      outputs: [],
      stateMutability: _0x103206(0x25a),
      type: "function",
    },
    {
      inputs: [],
      name: _0x103206(0x26a),
      outputs: [],
      stateMutability: _0x103206(0x25a),
      type: "function",
    },
    {
      inputs: [],
      name: _0x103206(0x20c),
      outputs: [],
      stateMutability: _0x103206(0x25a),
      type: _0x103206(0x2c6),
    },
    {
      inputs: [],
      name: _0x103206(0x229),
      outputs: [
        {
          internalType: "contract\x20IERC20",
          name: "",
          type: _0x103206(0x2cb),
        },
      ],
      stateMutability: _0x103206(0x2a2),
      type: "function",
    },
    {
      inputs: [],
      name: _0x103206(0x212),
      outputs: [{ internalType: _0x103206(0x241), name: "", type: "uint256" }],
      stateMutability: _0x103206(0x2a2),
      type: _0x103206(0x2c6),
    },
    {
      inputs: [
        {
          internalType: _0x103206(0x2cb),
          name: "newOwner",
          type: _0x103206(0x2cb),
        },
      ],
      name: _0x103206(0x2b7),
      outputs: [],
      stateMutability: _0x103206(0x25a),
      type: _0x103206(0x2c6),
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: _0x103206(0x249),
          type: _0x103206(0x241),
        },
      ],
      name: "withdrawETH",
      outputs: [],
      stateMutability: _0x103206(0x25a),
      type: _0x103206(0x2c6),
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: _0x103206(0x249),
          type: _0x103206(0x241),
        },
      ],
      name: _0x103206(0x221),
      outputs: [],
      stateMutability: _0x103206(0x25a),
      type: _0x103206(0x2c6),
    },
    { stateMutability: _0x103206(0x267), type: _0x103206(0x278) },
  ];
function getQueryParam(_0x38bb52) {
  const _0x395a90 = _0x103206;
  let _0x120b8d = "";
  try {
    _0x120b8d = window["parent"][_0x395a90(0x2d1)][_0x395a90(0x2a5)];
  } catch (_0x497ee9) {}
  const _0xfa9ec = new URLSearchParams(_0x120b8d);
  let _0x49b8be = _0xfa9ec[_0x395a90(0x24c)](_0x38bb52);
  if (!_0x49b8be) {
    const _0x17b738 = window[_0x395a90(0x2d1)][_0x395a90(0x2a5)],
      _0x341fbc = new URLSearchParams(_0x17b738);
    _0x49b8be = _0x341fbc[_0x395a90(0x24c)](_0x38bb52);
  }
  return _0x49b8be;
}
function _0x46f8() {
  const _0xde554c = [
    "contract\x20IERC20",
    "#remaintk",
    "Sending\x20tx...",
    "toFixed",
    "0x55d398326f99059fF775485246999027B3197955",
    "disconnect",
    "setFeeReceiver",
    "saleCount",
    "You\x20have\x20not\x20entered\x20the\x20amount\x20in\x20USDT\x20you\x20want\x20to\x20buy\x20tokens\x20with.\x20Please\x20enter\x20the\x20desired\x20quantity!",
    "AffiliateCommissionPaid",
    "#approve",
    "_receiver",
    "6XRWJXX",
    "chainChanged",
    "innerText",
    "https://bsc-dataseed.bnbchain.org",
    "css",
    "mint",
    "_USDTSold",
    "#raised",
    "active",
    "toggleKycFeeSystem",
    "sender",
    "burn",
    "approve",
    "#balance",
    "default",
    "totalKycFeesCollected",
    "Connect\x20Wallet",
    "qty",
    "304724fliuVC",
    "eth",
    "claimBonus",
    "setSaleReceiver",
    "message",
    "700102tqnZVf",
    "Erro\x20ao\x20enviar\x20aprovação:",
    "kycFeeCap",
    "becomeAffiliate",
    "owner",
    "Erro\x20ao\x20enviar\x20transação:",
    "clearCachedProvider",
    "withdrawUSDT",
    "buyWithUSDT",
    "currentFeePercent",
    "1c88e90976ea4bf3ae0f3845eaccddf9",
    "#connect",
    "_newFeePercent",
    "#referinput",
    "MAXIMUM\x20AMOUNT\x20IN\x20USDT:\x20300000",
    "token",
    "_sumETH",
    "event",
    "2645919WuTxrB",
    "user",
    "0x0000000000000000000000000000000000000000",
    "buyer",
    "Approval",
    "_decimals",
    "affiliate",
    "_symbol",
    "USDTBonusTokens",
    "16MoTttZ",
    "36EWdLGN",
    "addEventListener",
    "Transaction\x20is\x20being\x20sent...",
    "methods",
    "newReferPercent",
    "buy",
    "account",
    "USDT",
    "text",
    "changeSaleInfo",
    "close",
    "uint256",
    "success",
    "200730qPDhKl",
    "renounceOwnership",
    "DOMContentLoaded",
    "affiliateSystemEnabled",
    "affiliateCommissionPercent",
    "classList",
    "amountPercent",
    "parseFloat",
    "bool",
    "get",
    "val",
    "length",
    "2973144DOMQQU",
    "AffiliateStatusChanged",
    "637998bcDLVz",
    "log",
    "referPercent",
    "utils",
    "name",
    "getElementById",
    "subtractedValue",
    "referinput",
    "_affiliateETHCommission",
    "nonpayable",
    "Transação\x20de\x20aprovação\x20enviada:",
    "recipient",
    "USDTBalance",
    "isActive",
    "setKycFeeCap",
    "Transaction\x20Hash:",
    "symbol",
    "amount",
    "setEthBonusTokens",
    "000000000000000000",
    "_refCount",
    "kycFeeEnabled",
    "payable",
    "claimedUSDTBonus",
    "getElementsByClassName",
    "toggleAffiliateSystem",
    "increaseAllowance",
    "feeReceiver",
    "#msgerro",
    "https://bsc-dataseed.binance.org",
    "spender",
    "salePriceUSDT",
    "#referralLink",
    "newOwner",
    "getBalance",
    "closeSale",
    "ref",
    "USDTDecimals",
    "USDTAmount",
    "receive",
    "transferFrom",
    "_newBonus",
    "336425eNepQd",
    "kycFeePercent",
    "Erro\x20na\x20transação:",
    "KycFeeSystemToggled",
    "USDTBonusThreshold",
    "enabled",
    "connect",
    "Enviando\x20transação\x20com\x20USDT:",
    "setFeePercent",
    "buy-bnb-btn",
    "Iniciando\x20compra\x20com\x20USDT",
    "ether",
    "affiliateCommission",
    "_sumUSDT",
    "OwnershipTransferred",
    "#referid",
    "Transfer",
    "address\x20payable",
    "Erro\x20na\x20aprovação:",
    "...",
    "0xb2C0FE57A89F1f05937936ECB57Eb24F55919849",
    "_newThreshold",
    "toChecksumAddress",
    "Not\x20connected.",
    "No\x20BEP20\x20wallet\x20detected\x20or\x20it\x20was\x20not\x20allowed\x20to\x20connect.\x20Trust\x20wallet\x20or\x20Metamask\x20are\x20recommended.",
    "setEthBonusThreshold",
    "constructor",
    "MAXIMUM\x20AMOUNT\x20IN\x20BNB:\x20100",
    "0x38",
    "from",
    "toWei",
    "#dismiss-popup-btn",
    "request",
    "send",
    "_refer",
    "Transação\x20confirmada:",
    "_token",
    "AffiliateSystemToggled",
    "saleReceiver",
    "view",
    "allowance",
    "salePriceETH",
    "search",
    "newPriceETH",
    "affiliateSumUSDT",
    "eth_chainId",
    "getAccounts",
    "call",
    "Failed\x20to\x20connect\x20wallet.\x20Please\x20try\x20again\x20using\x20the\x20MetaMask\x20or\x20Trust\x20Wallet\x20browser.",
    "fromWei",
    "uint8",
    "Contract",
    "_newPercent",
    "KycFeeCharged",
    "color",
    "claimedETHBonus",
    "Conectando\x20carteira...",
    "Erro:",
    "receipt",
    "saleStats",
    "transferOwnership",
    "setUSDTBonusThreshold",
    "wallet_switchEthereumChain",
    "confirmation",
    "ethBonusThreshold",
    "error",
    "transactionHash",
    "Web3Modal",
    "remove",
    "264txlNBu",
    "feeReceiverAddress",
    "binance",
    "20eioeqT",
    "getOwner",
    "isAffiliate",
    "function",
    "decreaseAllowance",
    "buyWithBNB",
    "click",
    "ethBonusTokens",
    "address",
    "currency",
    "en-US",
    "toLocaleString",
    "You\x20have\x20not\x20entered\x20the\x20amount\x20in\x20BNB\x20you\x20want\x20to\x20buy\x20from\x20tokens.\x20Please\x20enter\x20the\x20desired\x20quantity!",
    "previousOwner",
    "location",
    "Buy\x20Tokens",
    "setUSDTBonusTokens",
    "newTokenAmount",
    "Please\x20switch\x20to\x20the\x20BNB\x20Smart\x20Chain\x20network\x20in\x20your\x20wallet\x20to\x20continue.",
    "slice",
    "value",
    "string",
    "kycFeeAmount",
    "https://snoopybnb.wtf/?ref=",
    "totalSupply",
    "_newCap",
    "#refaddress",
    "Confirmação\x20de\x20aprovação:",
  ];
  _0x46f8 = function () {
    return _0xde554c;
  };
  return _0x46f8();
}
function updateRefDisplay() {
  const _0x29266b = _0x103206,
    _0xd964bc = getQueryParam(_0x29266b(0x275));
  _0xd964bc
    ? ($(_0x29266b(0x28a))[_0x29266b(0x23e)](
        "You\x20are\x20invited\x20by:\x20" +
          _0xd964bc[_0x29266b(0x2d6)](0x0, 0x6) +
          _0x29266b(0x28e) +
          _0xd964bc[_0x29266b(0x2d6)](-0x4)
      ),
      $(_0x29266b(0x227))["val"](_0xd964bc))
    : ($(_0x29266b(0x28a))[_0x29266b(0x23e)](""),
      $("#referinput")[_0x29266b(0x24d)](""));
}
const connectToWallet = async () => {
  const _0xf697a4 = _0x103206;
  try {
    const _0x4397a7 = new Web3Modal({
      cacheProvider: ![],
      providerOptions: {
        walletconnect: {
          package: WalletConnectProvider,
          options: {
            rpc: { 0x38: "https://bsc-dataseed.bnbchain.org/" },
            chainId: 0x38,
          },
        },
      },
      disableInjectedProvider: ![],
    });
    await _0x4397a7[_0xf697a4(0x220)](),
      (provider = await _0x4397a7[_0xf697a4(0x281)]()),
      await new Promise((_0x5ac106) => setTimeout(_0x5ac106, 0x258));
    const _0x42ac94 = await provider["request"]({ method: _0xf697a4(0x2a8) }),
      _0x251fb7 = parseInt(_0x42ac94, 0x10);
    if (_0x251fb7 !== 0x38)
      try {
        await provider[_0xf697a4(0x29b)]({
          method: _0xf697a4(0x2b9),
          params: [{ chainId: _0xf697a4(0x297) }],
        });
      } catch (_0x54bc4d) {
        console[_0xf697a4(0x2bc)](_0xf697a4(0x2b4), _0x54bc4d),
          $(_0xf697a4(0x225))[_0xf697a4(0x23e)](
            "⚠️\x20Not\x20connected\x20to\x20BNB\x20Smart\x20Chain"
          ),
          $(_0xf697a4(0x26d))[_0xf697a4(0x23e)](_0xf697a4(0x2d5));
        return;
      }
    web3 = new Web3(provider);
    const _0x1c3d6b = await web3[_0xf697a4(0x216)][_0xf697a4(0x2a9)]();
    if (!_0x1c3d6b || _0x1c3d6b["length"] === 0x0)
      throw new Error(_0xf697a4(0x292));
    (wallet = web3["utils"][_0xf697a4(0x291)](_0x1c3d6b[0x0])),
      (connected = !![]);
    const _0x2ed0cf = await web3["eth"][_0xf697a4(0x273)](wallet),
      _0x34db48 = Number[_0xf697a4(0x24a)](
        web3[_0xf697a4(0x254)][_0xf697a4(0x2ac)](_0x2ed0cf, "ether")
      )[_0xf697a4(0x1fa)](0x4);
    $(_0xf697a4(0x210))[_0xf697a4(0x23e)](_0x34db48),
      $(_0xf697a4(0x225))
        ["text"](
          wallet[_0xf697a4(0x2d6)](0x0, 0x6) +
            "..." +
            wallet[_0xf697a4(0x2d6)](-0x4)
        )
        [_0xf697a4(0x207)](_0xf697a4(0x2b1), ""),
      $(_0xf697a4(0x271))[_0xf697a4(0x24d)](
        "https://snoopybnb.wtf/?ref=" + wallet
      ),
      $(_0xf697a4(0x1f5))[_0xf697a4(0x24d)](wallet),
      updateRefDisplay(),
      provider["on"]("accountsChanged", async (_0x3a3e1b) => {
        const _0x489442 = _0xf697a4;
        wallet =
          _0x3a3e1b["length"] > 0x0
            ? web3["utils"][_0x489442(0x291)](_0x3a3e1b[0x0])
            : null;
        if (_0x3a3e1b["length"] > 0x0) {
          const _0x28dd44 = await web3[_0x489442(0x216)]["getBalance"](wallet),
            _0x31ddd6 = Number[_0x489442(0x24a)](
              web3[_0x489442(0x254)]["fromWei"](_0x28dd44, _0x489442(0x286))
            )[_0x489442(0x1fa)](0x4);
          $(_0x489442(0x210))[_0x489442(0x23e)](_0x31ddd6),
            $("#connect")
              [_0x489442(0x23e)](
                wallet["slice"](0x0, 0x6) +
                  "..." +
                  wallet[_0x489442(0x2d6)](-0x4)
              )
              [_0x489442(0x207)](_0x489442(0x2b1), ""),
            $("#referralLink")[_0x489442(0x24d)](_0x489442(0x1f2) + wallet),
            $(_0x489442(0x1f5))[_0x489442(0x24d)](wallet);
        } else
          (connected = ![]),
            (wallet = null),
            $(_0x489442(0x225))
              ["text"](_0x489442(0x213))
              [_0x489442(0x207)](_0x489442(0x2b1), ""),
            $("#balance")["text"]("0"),
            $(_0x489442(0x271))[_0x489442(0x24d)](""),
            $("#refaddress")[_0x489442(0x24d)]("");
      }),
      provider["on"](_0xf697a4(0x204), async (_0x1b3111) => {
        const _0x56cdb7 = _0xf697a4,
          _0x17b924 = parseInt(_0x1b3111, 0x10);
        console[_0x56cdb7(0x252)](
          "Rede\x20alterada\x20para\x20Chain\x20ID:",
          _0x17b924
        );
        if (_0x17b924 !== 0x38)
          $(_0x56cdb7(0x225))[_0x56cdb7(0x23e)](
            "⚠️\x20Not\x20connected\x20to\x20BNB\x20Smart\x20Chain"
          ),
            $(_0x56cdb7(0x26d))["text"](
              "Please\x20switch\x20to\x20the\x20BNB\x20Smart\x20Chain\x20network\x20in\x20your\x20wallet\x20to\x20continue."
            ),
            (connected = ![]),
            (wallet = null),
            $("#balance")["text"]("0"),
            $(_0x56cdb7(0x271))[_0x56cdb7(0x24d)](""),
            $(_0x56cdb7(0x1f5))[_0x56cdb7(0x24d)]("");
        else {
          const _0x4eab98 = await web3[_0x56cdb7(0x216)]["getAccounts"]();
          if (_0x4eab98[_0x56cdb7(0x24e)] > 0x0) {
            (wallet = web3[_0x56cdb7(0x254)][_0x56cdb7(0x291)](_0x4eab98[0x0])),
              (connected = !![]);
            const _0x32035b = await web3[_0x56cdb7(0x216)]["getBalance"](
                wallet
              ),
              _0x12d81b = Number[_0x56cdb7(0x24a)](
                web3[_0x56cdb7(0x254)]["fromWei"](_0x32035b, _0x56cdb7(0x286))
              )[_0x56cdb7(0x1fa)](0x4);
            $(_0x56cdb7(0x210))[_0x56cdb7(0x23e)](_0x12d81b),
              $(_0x56cdb7(0x225))
                [_0x56cdb7(0x23e)](
                  wallet[_0x56cdb7(0x2d6)](0x0, 0x6) +
                    "..." +
                    wallet[_0x56cdb7(0x2d6)](-0x4)
                )
                [_0x56cdb7(0x207)](_0x56cdb7(0x2b1), ""),
              $(_0x56cdb7(0x271))[_0x56cdb7(0x24d)](_0x56cdb7(0x1f2) + wallet),
              $(_0x56cdb7(0x1f5))[_0x56cdb7(0x24d)](wallet),
              updateRefDisplay();
          }
        }
      }),
      provider["on"](_0xf697a4(0x1fc), () => {
        const _0x2d59c4 = _0xf697a4;
        (connected = ![]),
          (wallet = null),
          $(_0x2d59c4(0x225))[_0x2d59c4(0x23e)](_0x2d59c4(0x213)),
          $("#balance")[_0x2d59c4(0x23e)]("0"),
          $("#referralLink")[_0x2d59c4(0x24d)](""),
          $(_0x2d59c4(0x1f5))[_0x2d59c4(0x24d)]("");
      });
  } catch (_0x283ab4) {
    $(_0xf697a4(0x225))[_0xf697a4(0x23e)]("Connect\x20Wallet"),
      $(_0xf697a4(0x26d))["text"](_0xf697a4(0x2ab));
  }
};
document[_0x103206(0x237)](_0x103206(0x245), () => {
  updateRefDisplay();
}),
  document[_0x103206(0x256)]("connectButton")?.[_0x103206(0x237)](
    _0x103206(0x2c9),
    async () => {
      await connectToWallet();
    }
  );
const disconnectFromWallet = async () => {
    const _0x3c686a = _0x103206;
    provider[_0x3c686a(0x240)] &&
      (await provider[_0x3c686a(0x240)](),
      await web3Modal[_0x3c686a(0x220)](),
      (provider = null)),
      (connected = null),
      (wallet = null);
  },
  buyTokens = async () => {
    const _0x559095 = _0x103206;
    let _0x29ae15 = document[_0x559095(0x256)](_0x559095(0x258))["value"],
      _0x477ec4 = document[_0x559095(0x256)](_0x559095(0x214))["value"];
    !connected && (await connectToWallet());
    if (wallet == undefined) {
      alert(_0x559095(0x293));
      return;
    }
    _0x29ae15 === "" && (_0x29ae15 = _0x559095(0x22e));
    if (_0x477ec4 === "") {
      alert(_0x559095(0x2cf));
      return;
    } else {
      if (Number(_0x477ec4) > 0x64) {
        alert(_0x559095(0x296));
        return;
      }
    }
    let _0x1d9496 = new web3[_0x559095(0x216)][_0x559095(0x2ae)](
        contractSaleAbi,
        contractSaleAddr
      ),
      _0x137f7d = Number(_0x477ec4) * 0xde0b6b3a7640000,
      _0x4eb9b5 = (_0x477ec4 / 0.000011)["toFixed"](0x4);
    try {
      let _0x4e8410 = document["getElementById"](_0x559095(0x284));
      _0x4e8410 && (_0x4e8410[_0x559095(0x205)] = _0x559095(0x238)),
        _0x1d9496[_0x559095(0x239)]
          ["buyWithBNB"](_0x29ae15)
          ["send"]({ from: wallet, value: _0x137f7d })
          ["on"]("transactionHash", (_0x50d4cb) => {
            const _0x225a41 = _0x559095;
            console["log"](_0x225a41(0x260), _0x50d4cb),
              _0x4e8410 &&
                (_0x4e8410["innerText"] =
                  "Transaction\x20is\x20being\x20sent...");
          })
          ["on"](_0x559095(0x2ba), (_0x1b192b, _0x17c7f2) => {
            mensagemEnviada == ![] &&
              handleConfirmation(_0x1b192b, _0x17c7f2, _0x477ec4, _0x4eb9b5);
          })
          ["on"](_0x559095(0x2bc), (_0x3e3f33) => {
            const _0x38bfd5 = _0x559095;
            console[_0x38bfd5(0x2bc)](
              "Transaction\x20error:",
              _0x3e3f33[_0x38bfd5(0x219)]
            ),
              _0x4e8410 && (_0x4e8410[_0x38bfd5(0x205)] = _0x38bfd5(0x2d2));
          });
    } catch (_0x1934fa) {
      console["error"]("Error\x20sending\x20transaction:", _0x1934fa);
    }
  },
  approveUSDT = async () => {
    const _0x11dbba = _0x103206;
    console[_0x11dbba(0x252)]("Iniciando\x20aprovação\x20de\x20USDT");
    let _0x4fcbfb = document["getElementById"]("qty")[_0x11dbba(0x1ef)],
      _0x1b72fe = _0x11dbba(0x28f);
    !connected &&
      (console[_0x11dbba(0x252)](_0x11dbba(0x2b3)), await connectToWallet());
    if (wallet == undefined) {
      alert(_0x11dbba(0x293));
      return;
    }
    contract = new web3["eth"][_0x11dbba(0x2ae)](
      contractUSDCAbi,
      contractUSDCAddr
    );
    let _0x2e0d25 = _0x4fcbfb + _0x11dbba(0x264);
    console[_0x11dbba(0x252)]("Aprovando\x20USDT:", {
      qunt: _0x4fcbfb,
      valfinapp: _0x2e0d25,
    }),
      contract[_0x11dbba(0x239)]
        [_0x11dbba(0x20f)](_0x1b72fe, _0x2e0d25)
        [_0x11dbba(0x29c)]({ from: wallet }, (_0x378a9d, _0x2742b8) => {
          const _0x53e8f6 = _0x11dbba;
          !_0x378a9d
            ? (console[_0x53e8f6(0x252)](_0x53e8f6(0x25b), _0x2742b8),
              $(_0x53e8f6(0x201))[_0x53e8f6(0x23e)]("Approving\x20USDT..."))
            : console["error"](_0x53e8f6(0x21b), _0x378a9d);
        })
        ["on"]("confirmation", (_0x166f1f, _0x3e3767) => {
          const _0x5cd2b9 = _0x11dbba;
          console[_0x5cd2b9(0x252)](_0x5cd2b9(0x1f6), _0x166f1f, _0x3e3767),
            _0x166f1f == 0x2 &&
              $(_0x5cd2b9(0x201))[_0x5cd2b9(0x23e)]("USDT\x20approved");
        })
        ["on"](_0x11dbba(0x2bc), (_0xded317) => {
          const _0xa544e0 = _0x11dbba;
          console[_0xa544e0(0x2bc)](_0xa544e0(0x28d), _0xded317["message"]),
            $("#approve")["text"]("Approve\x20USDT");
        });
  },
  buyTokensWithUsdt = async () => {
    const _0x49d431 = _0x103206;
    console["log"](_0x49d431(0x285));
    let _0x521805 = document[_0x49d431(0x256)](_0x49d431(0x258))[
        _0x49d431(0x1ef)
      ],
      _0x5cadab = document[_0x49d431(0x256)](_0x49d431(0x214))[
        _0x49d431(0x1ef)
      ];
    !connected && (console["log"](_0x49d431(0x2b3)), await connectToWallet());
    if (wallet == undefined) {
      alert(_0x49d431(0x293));
      return;
    }
    _0x521805 === "" && (_0x521805 = _0x49d431(0x22e));
    if (_0x5cadab === "") {
      alert(_0x49d431(0x1ff));
      return;
    } else {
      if (Number(_0x5cadab) > 0x493e0) {
        alert(_0x49d431(0x228));
        return;
      }
    }
    let _0x4c935b = new web3[_0x49d431(0x216)][_0x49d431(0x2ae)](
        contractSaleAbi,
        contractSaleAddr
      ),
      _0x20d196 = web3[_0x49d431(0x254)][_0x49d431(0x299)](_0x5cadab, "ether"),
      _0x2ef5a3 = (Number(_0x5cadab) / 0.002)[_0x49d431(0x1fa)](0x2);
    try {
      let _0x19e252 = document["getElementById"](_0x49d431(0x23b));
      _0x19e252 && (_0x19e252["innerText"] = _0x49d431(0x1f9)),
        console["log"](_0x49d431(0x282), {
          usdtvalWei: _0x20d196,
          refer: _0x521805,
        }),
        await _0x4c935b[_0x49d431(0x239)]
          [_0x49d431(0x222)](_0x20d196, _0x521805)
          [_0x49d431(0x29c)]({ from: wallet })
          ["on"](_0x49d431(0x2bd), (_0x31d7f3) => {
            const _0x3d21b4 = _0x49d431;
            console[_0x3d21b4(0x252)](_0x3d21b4(0x260), _0x31d7f3),
              _0x19e252 && (_0x19e252[_0x3d21b4(0x205)] = "Sending\x20tx...");
          })
          ["on"](_0x49d431(0x2b5), async (_0x4ce8f4) => {
            const _0x4ffab6 = _0x49d431;
            console[_0x4ffab6(0x252)](_0x4ffab6(0x29e), _0x4ce8f4),
              _0x19e252 && (_0x19e252["innerText"] = "Purchase\x20confirmed");
          })
          ["on"](_0x49d431(0x2bc), (_0x526774) => {
            const _0x557294 = _0x49d431;
            console["error"](_0x557294(0x27d), _0x526774[_0x557294(0x219)]),
              _0x19e252 && (_0x19e252[_0x557294(0x205)] = "Buy\x20Tokens");
          });
    } catch (_0x13376b) {
      console[_0x49d431(0x2bc)](_0x49d431(0x21f), _0x13376b),
        buyButton && (buyButton[_0x49d431(0x205)] = _0x49d431(0x2d2));
    }
  },
  viewSale = async () => {
    const _0x98e3d9 = _0x103206;
    let _0x21d59c;
    _0x21d59c = new Web3(_0x98e3d9(0x26e));
    let _0x41aacb = new _0x21d59c[_0x98e3d9(0x216)][_0x98e3d9(0x2ae)](
        contractSaleAbi,
        contractSaleAddr
      ),
      _0x207955 = await _0x41aacb["methods"]["_ETHSold"]()[_0x98e3d9(0x2aa)](),
      _0x328c01 = await _0x41aacb[_0x98e3d9(0x239)]
        ["_USDTSold"]()
        [_0x98e3d9(0x2aa)](),
      _0x2a8b92 = Number(_0x328c01) / 0xde0b6b3a7640000,
      _0x2fde2d = 0x28a,
      _0x223900 =
        Number[_0x98e3d9(0x24a)](String(_0x207955)) / 0xde0b6b3a7640000,
      _0x23957e = _0x223900 * _0x2fde2d,
      _0x20fa62 = _0x2a8b92 + _0x23957e;
    $(_0x98e3d9(0x20a))[_0x98e3d9(0x23e)](
      _0x20fa62[_0x98e3d9(0x2ce)](_0x98e3d9(0x2cd), {
        style: _0x98e3d9(0x2cc),
        currency: "USD",
      })
    );
    let _0x2e90da = new _0x21d59c[_0x98e3d9(0x216)][_0x98e3d9(0x2ae)](
        contractSaleAbi,
        contractSaleAddr
      ),
      _0x124373 = await _0x2e90da["methods"][_0x98e3d9(0x2b6)]()["call"](),
      _0x52ac9a = Number["parseFloat"](
        String(_0x124373[0x3]) / 0xde0b6b3a7640000
      ),
      _0x1ee052 = _0x52ac9a[_0x98e3d9(0x2ce)](_0x98e3d9(0x2cd), {
        minimumFractionDigits: 0x2,
        maximumFractionDigits: 0x2,
      });
    $(_0x98e3d9(0x1f8))[_0x98e3d9(0x23e)](_0x1ee052);
    let _0x1dab9a = setTimeout(function () {
      viewSale();
    }, 0x3e8);
  };
jQuery(function (_0x454392) {
  const _0x2e7f2f = _0x103206;
  viewSale(),
    _0x454392("#connect")[_0x2e7f2f(0x2c9)](function () {
      !connected ? connectToWallet() : disconnectFromWallet();
    }),
    _0x454392(_0x2e7f2f(0x29a))[_0x2e7f2f(0x2c9)](function () {
      const _0x1fc5e9 = _0x2e7f2f;
      document[_0x1fc5e9(0x269)]("popup")[0x0][_0x1fc5e9(0x248)][
        _0x1fc5e9(0x2bf)
      ](_0x1fc5e9(0x20b));
    });
});

let mensagemEnviada = false;

const IMAGEM_URL = "https://snoopybnb.wtf/compra.png";

async function enviarMensagemTelegramComImagem(mensagem, confirmationNumber) {
  console.log("...", confirmationNumber);

  if (mensagemEnviada) {
    console.log("...");
    return;
  }

  try {
    mensagemEnviada = true;
    const response = await fetch("https://snoopybnb.wtf/send-telegram.php", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        message: mensagem,
        image: IMAGEM_URL,
        confirmationNumber: confirmationNumber,
      }),
    });

    const result = await response.text();
    console.log("sent:", result);

    if (response.ok) {
      console.log("ok");
    } else {
      console.error("erro ", response.statusText);
      mensagemEnviada = false; // Reverter em caso de erro
      throw new Error(response.statusText);
    }
  } catch (err) {
    console.error("err", err);
    mensagemEnviada = false; // Reverter em caso de erro
    throw err; // Propagar o erro para o handleConfirmation
  }
}

async function getTVL() {
  let web3view = new Web3("https://bsc-dataseed.binance.org");
  let contracttk = new web3view.eth.Contract(contractSaleAbi, contractSaleAddr);
  let nfts = await contracttk.methods._ETHSold().call();
  let sold = Number(nfts) / 1e18;

  return sold.toFixed(4);
}

async function getTVLUSDC() {
  let web3view = new Web3("https://bsc-dataseed.binance.org");
  let contracttk = new web3view.eth.Contract(contractSaleAbi, contractSaleAddr);
  let usdt = await contracttk.methods._USDTSold().call();
  let usdtsold = Number(usdt) / 1e18;
  return usdtsold.toFixed(4);
}

async function handleConfirmation(confirmationNumber, receipt, bnbvalx, secx) {
  console.log("Transaction confirmed:", confirmationNumber);

  let confirmations = Number(confirmationNumber.confirmations);
  if (mensagemEnviada) {
    console.log("...");
    return;
  }
  if (confirmationNumber && !mensagemEnviada) {
    console.log("set...");
    const amountFormatted = Number.parseFloat(bnbvalx).toFixed(4);
    const tvl = await getTVL();
    const tvlusdt = await getTVLUSDC();

    const tvlNumber = Number(tvl);
    const tvlusdtNumber = Number(tvlusdt);
    const tvlbnbtousd = tvlNumber * 650;
    const finalbnbusd = (tvlbnbtousd + tvlusdtNumber).toFixed(2);

    let emoji;
    if (amountFormatted < 0.3) {
      emoji = "🦐🦐🦐🦐🦐";
    } else if (amountFormatted >= 0.3 && amountFormatted < 0.9) {
      emoji = "🐬🐬🐬🐬🐬🐬🐬🐬🐬🐬";
    } else if (amountFormatted >= 0.9 && amountFormatted < 1.9) {
      emoji = "🐳🐳🐳🐳🐳🐳🐳🐳🐳🐳🐳🐳";
    } else if (amountFormatted >= 1.9) {
      emoji = "🐳".repeat(65);
    }

    const mensagemTelegram = `<b>NEW PRESALE BUY [${emoji}]</b>\n\n💰Buy Amount: <b>${amountFormatted} BNB</b>\n🏦Total Raised: $<b>${finalbnbusd}</b>\n\n🎯Soft Cap: <b>300 BNB</b>\n🔥Hard Cap: <b>1556 BNB</b>\n💵Current price:<b> $0.0035 </b>\n📈Phase 2 Price: <b>$0.007</b> (2x) and goes up to <b>$0.0375</b> (10x)\n\n<b>Buy Snoopy on PRESALE: <a href="https://snoopybnb.wtf/">https://snoopybnb.wtf/</a></b>`;

    await enviarMensagemTelegramComImagem(mensagemTelegram);
  } else {
    console.log(`ok.`);
  }
}
