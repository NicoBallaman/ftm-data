import { Address, BigInt, ethereum } from "@graphprotocol/graph-ts";
import { FantomToken } from "../generated/FantomToken/FantomToken";
import { FantomData, IcoDate, TokensPerEthUpdated } from "../generated/schema";

export class Commons {
  
  public getTokenData(event: ethereum.Event): FantomData {
     let entity = FantomData.load('1');
     if (entity) {
       return entity;
     }
     return  this._createInitialFantomData(event);
   }
   
  private _createInitialFantomData(event: ethereum.Event): FantomData {
    let contract = FantomToken.bind(event.address);
     //Save new tokensPerEth
     let entityTokensPerEth = new TokensPerEthUpdated(Commons.buildID(event));
     entityTokensPerEth.sender = event.transaction.from;
     entityTokensPerEth.contract = event.address.toHex();
     entityTokensPerEth.tokensPerEth = contract.tokensPerEth();
     entityTokensPerEth.timestamp = event.block.timestamp;
     entityTokensPerEth.save();
     //Save new icoDate start
     let entityIcoDateStart = IcoDate.load(event.address.toHex() + "-1");
     if (!entityIcoDateStart) {
      entityIcoDateStart = new IcoDate(event.address.toHex() + "-1");
     }
     entityIcoDateStart.sender = event.transaction.from;
     entityIcoDateStart.contract = event.address.toHex();
     entityIcoDateStart.unixts = contract.dateMainStart();
     entityIcoDateStart.type = BigInt.fromI32(1);
     entityIcoDateStart.timestamp = event.block.timestamp;
     entityIcoDateStart.save();
     //Save new icoDate end
     let entityIcoDateEnd = IcoDate.load(event.address.toHex() + "-2");
     if (!entityIcoDateEnd) {
      entityIcoDateEnd = new IcoDate(event.address.toHex() + "-2");
     }
    entityIcoDateEnd.sender = event.transaction.from;
    entityIcoDateEnd.contract = event.address.toHex();
    entityIcoDateEnd.unixts = contract.dateMainEnd();
    entityIcoDateEnd.type = BigInt.fromI32(2);
    entityIcoDateEnd.timestamp = event.block.timestamp;
    entityIcoDateEnd.save();
     //Save FantomData
     let entity = new FantomData(event.address.toHex());
     entity.owner = event.transaction.from;
     entity.wallet = contract.wallet.toString();
     entity.tokensPerEth = entityTokensPerEth.id;
     entity.save();
     return entity;
   }


   static buildID(event: ethereum.Event): string {
     return event.transaction.hash.toHex() + "-" + event.logIndex.toString();
   }
}