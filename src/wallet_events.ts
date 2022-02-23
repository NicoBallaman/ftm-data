import { WalletUpdated } from "../generated/FantomToken/FantomToken";
import { TokenWallet } from "../generated/schema";
import { Commons } from "./commons";

export function handleWalletUpdated(event: WalletUpdated): void {
    //event WalletUpdated(address newWallet);
    let entity = TokenWallet.load(event.params.newWallet.toHex());
    if (!entity) {
      entity = new TokenWallet(event.params.newWallet.toHex())
    }
    entity.address = event.params.newWallet;
    entity.contract = event.address.toHex();
    entity.timestamp = event.block.timestamp;
    entity.sender = event.transaction.from;
    entity.save();
    let fantomData = Commons.getTokenData(event.address, event.block.timestamp, event.transaction.from);
    fantomData.wallet = entity.id;
    fantomData.save();
  }