# Kenshi D20

This is a sample project using the Kenshi VRF oracle,
you can deploy the `contracts/D20.sol` to any EVM chain on Remix.
You can find already deployed versions of this contract in the
table below.

|       **Chain**        |                                                           **Address**                                                           |
| :--------------------: | :-----------------------------------------------------------------------------------------------------------------------------: |
|      BSC testnet       |  [0xA585Aa1A06a17a0DC2Ee8b12EfD40b08826020F1](https://testnet.bscscan.com/address/0xA585Aa1A06a17a0DC2Ee8b12EfD40b08826020F1)   |
| Polygon Mumbai testnet | [0xc490A24dd3A2600DbedD3CC1E7151c1D7645b656](https://mumbai.polygonscan.com/address/0xc490A24dd3A2600DbedD3CC1E7151c1D7645b656) |
|     Fantom testnet     |  [0x571aa5DAf9196e20f97AA5f82d0c991D2A5CF167](https://testnet.ftmscan.com/address/0x571aa5DAf9196e20f97AA5f82d0c991D2A5CF167)   |
| Avalanche Fuji testnet |  [0x9877690753444fa090C107bF83ea48F7EdAD7937](https://testnet.snowtrace.io/address/0x9877690753444fa090C107bF83ea48F7EdAD7937)  |
|    Ethereum Goerli     |  [0x68EB019C53D8FE3Ffe60784617377649Cd9380C9](https://goerli.etherscan.io/address/0x68EB019C53D8FE3Ffe60784617377649Cd9380C9)   |

## After deployment

After you deploy the contract, you need to call the `setVRFConfig` function
with appropriate parameters. These parameters are:

|   **Name**    | **Type**  |                       **Description**                       |
| :-----------: | :-------: | :---------------------------------------------------------: |
| `coordinator` | `address` |         The Kenshi VRF Coordinator contract address         |
|   `verify`    |  `bool`   | Whether to verify the randomness on-chain (affects gas fee) |
|   `silent`    |  `bool`   |  Whether to emit an event on randomness (affects gas fee)   |

Notes: In the `setupVRF` function of the Kenshi VRF library, the last two parameters of the above
table are optional.

You can find the contract address of each chain on our documentation
website [here](https://docs.kenshi.io/services/vrf/contracts.html).

## After setup

Once the setup is done, you can call the `roll` function on the D20 smart contract.
This function asks the VRF coordinator for `randomness`. Once the requested `randomness`
is received, the `fulfillRandomness` function emits a `Rolled` event.


