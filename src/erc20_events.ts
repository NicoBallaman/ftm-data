import { Approval, Transfer } from "../generated/FantomToken/FantomToken";
import { Transaction, TransactionApproval } from "../generated/schema";
import { Commons } from "./commons";

export function handleTransfer(event: Transfer): void {
    //event Transfer(address _from, address _to, uint _value);
    let entity = new Transaction(Commons.buildID(event))
    entity.from = event.params._from;
    entity.to = event.params._to;
    entity.spender = event.transaction.from;
    entity.value = event.params._value;
    entity.timestamp = event.block.timestamp;
    entity.save();
  }
  
  export function handleApproval(event: Approval): void {
    //event Approval(address _owner, address _spender, uint _value);
    let entity = new TransactionApproval(Commons.buildID(event));
    entity.owner = event.params._owner;
    entity.spender = event.params._spender;
    entity.timestamp = event.block.timestamp;
    entity.value = event.params._value;
    entity.save();
  }
  