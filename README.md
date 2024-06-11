# Ton faucet dApp: contract + UI

This is a showcase project that combines a facuet contract and corresponding UI that can be launched on Ton blockchain through [Drew Package Manager](https://www.npmjs.com/package/@drewpackages/cli). The setup creates a new Jetton token with the name of your choosing and creates a faucet UI that helps anyone mint the token they might need for testing purposes

To launch a new dApp instance (including new contracts deployment) it:
```shell
npm i -g @drewpackages/cli
drew deploy-ton drinkius/tonfaucet  --params "{\"name\": \"Test Token\", \"symbol\": \"TT\", \"totalSupply\": 100000000000000 }"
```

## Contributing

```shell
npm i
npx blueprint run
```
