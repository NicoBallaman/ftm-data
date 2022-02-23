import { AdminChange, OwnershipTransferProposed, OwnershipTransferred } from "../generated/FantomToken/FantomToken";
import { Admin, OwnershipTransfer } from "../generated/schema";
import { Commons } from "./commons";

export function handleOwnershipTransferProposed(event: OwnershipTransferProposed): void {
    //event OwnershipTransferProposed(address _from, address _to);
  }
  
  export function handleOwnershipTransferred(event: OwnershipTransferred): void {
    //event OwnershipTransferred(address _from, address _to);
    let entity = new OwnershipTransfer(Commons.buildID(event));
    entity.from = event.params._from;
    entity.to = event.params._to;
    entity.timestamp = event.block.timestamp;
    entity.save();
  }
  
  export function handleAdminChange(event: AdminChange): void {
    //event AdminChange(address _admin, bool _status);
    let entity = Admin.load(event.params._admin.toHex());
    if (!entity) {
      entity = new Admin(event.params._admin.toHex())
    }
    entity.sender = event.transaction.from;
    entity.address = event.params._admin;
    entity.active = event.params._status;
    entity.save();
  }