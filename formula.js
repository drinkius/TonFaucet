const paramsSchema = {
  properties: {
    name: {
      type: "string",
    },
    symbol: {
      type: "string",
    },
    totalSupply: {
      type: "integer",
      exclusiveMinimum: 0,
    },
  },
  required: ["name", "symbol", "totalSupply"],
};

function deploy(params) {
  const [address] = api.blueprint.script({
    path: "./scripts/deploy.ts",
    envs: {
      TOKEN_NAME: params.name,
      TOKEN_SYMBOL: params.symbol,
      TOKEN_SUPPLY: params.totalSupply.toString(),
    },
    interactive: true,
    outputs: [
      {
        name: "address",
        extract: {
          type: "regex",
          expr: "Contract\s+deployed\s+at\s+address\s+(?<address>[A-Za-z0-9_-]+)",
          groupName: "address",
        },
      },
    ],
  });

  api.offchain.deploy({
    details: {
      envs: {
        CONTRACT_ADDRESS: address,
        RPC_URL: params.config.common.rpcUrl(),
      },
      flags: {
        build: true,
      },
    },
  });
}
