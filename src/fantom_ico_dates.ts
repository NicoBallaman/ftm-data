import { IcoDateUpdated } from "../generated/FantomToken/FantomToken";
import { IcoDate } from "../generated/schema";

export function handleIcoDateUpdated(event: IcoDateUpdated): void {
    //event IcoDateUpdated(uint id, uint unixts);
    let entity = IcoDate.load(event.address.toHex() + "-" + event.params.id.toString());
    if (!entity) {
      entity = new IcoDate(event.address.toHex() + "-" + event.params.id.toString());
    }
    entity.sender = event.transaction.from;
    entity.contract = event.address.toHex();
    entity.unixts = event.params.unixts;
    entity.type = event.params.id;
    entity.timestamp = event.block.timestamp;
    entity.save();
  }