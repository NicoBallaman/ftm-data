import { RegisteredLockedTokens } from "../generated/FantomToken/FantomToken";
import { LockedTokens } from "../generated/schema";
import { Commons } from "./commons";

export function handleRegisteredLockedTokens(event: RegisteredLockedTokens): void {
    //event RegisteredLockedTokens(address account, uint idx, uint tokens, uint term);
    let entity = new LockedTokens(Commons.buildID(event));
    entity.sender = event.transaction.from;
    entity.account = event.params.account;
    entity.idx = event.params.idx;
    entity.tokens = event.params.tokens;
    entity.term = event.params.term;
    entity.save();
  }