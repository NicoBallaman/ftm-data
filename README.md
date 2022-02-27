# ftm-data

Ftm-data contains an implementation of [The graph](https://thegraph.com/en/).

> The Graph is an indexing protocol for querying networks like Ethereum and IPFS. Anyone can build and publish open APIs, called subgraphs, making data easily accessible.

We develop a subgraph composed by [fantom](https://fantom.foundation) smart contract. (Ethereum contract [here](https://etherscan.io/address/0x4e15361fd6b4bb609fa63c81a2be19d873717870)). This image shows us all the contracts with their relations

![1111111111](https://user-images.githubusercontent.com/35499273/155815619-eb0896c1-ea32-4c0a-ba81-d999ae009e68.jpg)

With the subgraph created, we handle all events emited from this contract and save in our own structure as shown in the following diagram.

![22222222](https://user-images.githubusercontent.com/35499273/155815629-0f8ab19f-2ec7-4aba-b367-ff4440f23cad.jpg)

After deploy this subgraph in [subgraph studio](https://thegraph.com/studio/) we can test our GraphQL API. For example with this query we can see the top 3 contributions to fantom token.

![33333333](https://user-images.githubusercontent.com/35499273/155815654-08668a16-0f50-4368-9cf4-5d2fcfde4d8b.png)

An the result of this query is 

![4444444](https://user-images.githubusercontent.com/35499273/155815669-9f4d52fc-a292-448a-9fc9-5a4d5ce57520.png)

<hr>
<br>

**All events are handed by this subgraph, the data is stored and processed on open networks with verifiable integrity. The Graph makes querying this data fast, reliable, and secure.**

<br>
