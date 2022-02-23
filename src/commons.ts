import { Address, BigInt, ethereum } from "@graphprotocol/graph-ts";
import { FantomToken } from "../generated/FantomToken/FantomToken";
import { FantomData, TokensPerEthUpdated } from "../generated/schema";

export class Commons {
  
  static getTokenData(contractAddress: Address, timestamp: BigInt, sender: Address): FantomData {
     let entity = FantomData.load('1');
     let contract = FantomToken.bind(contractAddress);
     if (entity) {
       return entity;
     }
     //Save new tokensPerEth
     let entityTokensPerEth = new TokensPerEthUpdated(sender.toHex() + "-first");
     entityTokensPerEth.sender = sender;
     entityTokensPerEth.contract = contractAddress.toHex();
     entityTokensPerEth.tokensPerEth = contract.tokensPerEth();
     entityTokensPerEth.timestamp = timestamp;
     entityTokensPerEth.save();
     //Save FantomData
     entity = new FantomData('1');
     entity.owner = sender;
     entity.wallet = contract.wallet.toString();
     entity.tokensPerEth = entityTokensPerEth.id;
     entity.save();
     return entity;
   }
   
   static buildID(event: ethereum.Event): string {
     return event.transaction.hash.toHex() + "-" + event.logIndex.toString();
   }
}