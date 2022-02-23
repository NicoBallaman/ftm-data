import { FantomToken, RegisterContribution, TokenExchangeRequested, TokensMinted, UpdatedTokensPerEth, Whitelisted } from "../generated/FantomToken/FantomToken";
import { Contribution, ExchangeRequest, Mint, TokensPerEthUpdated, Whitelist } from "../generated/schema";
import { Commons } from "./commons";

export function handleWhitelisted(event: Whitelisted): void {
    //event Whitelisted(address account, uint countWhitelisted);
    let entity = Whitelist.load(event.params.account.toHex());
    if (!entity) {
      entity = new Whitelist(event.params.account.toHex());
    }
    entity.admin = event.transaction.from.toHex();
    entity.account = event.params.account;
    entity.countWhitelisted = event.params.countWhitelisted;
    entity.save();
  }
  
  
  export function handleUpdatedTokensPerEth(event: UpdatedTokensPerEth): void {
    //event UpdatedTokensPerEth(uint tokensPerEth);
    let entity = new TokensPerEthUpdated(Commons.buildID(event));
    entity.sender = event.transaction.from;
    entity.contract = event.address.toHex();
    entity.tokensPerEth = event.params.tokensPerEth;
    entity.timestamp = event.block.timestamp;
    entity.save();
    let fantomData = new Commons().getTokenData(event);
    fantomData.tokensPerEth = entity.id;
    fantomData.save();
    
  }
  
  export function handleTokenExchangeRequested(event: TokenExchangeRequested): void {
    //event TokenExchangeRequested(address account, uint tokens);
    let entity = new ExchangeRequest(Commons.buildID(event));
    entity.account = event.params.account;
    entity.tokens = event.params.tokens;
    entity.save();
  }
  
  export function handleTokensMinted(event: TokensMinted): void {
    //event TokensMinted(uint mintType, address account, uint tokens, uint term);
    let entity = new Mint(Commons.buildID(event));
    entity.account = event.params.account.toHex();
    entity.mintType = event.params.mintType;
    entity.sender = event.transaction.from;
    entity.term = event.params.term;
    entity.tokens = event.params.tokens;
    entity.save();
  }
  
  export function handleRegisterContribution(event: RegisterContribution): void {
    //event RegisterContribution(address account, uint tokensIssued, uint ethContributed, uint ethReturned);
    let entity = new Contribution(Commons.buildID(event));
    let contract = FantomToken.bind(event.address);
    entity.wallet = contract.wallet.toString();
    entity.account = event.params.account;
    entity.tokensIssued = event.params.tokensIssued;
    entity.ethContributed = event.params.ethContributed;
    entity.ethReturned = event.params.ethReturned;
    entity.timestamp = event.block.timestamp;
    entity.save();
  }
  