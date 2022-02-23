export * from './erc20_events';
export * from './fantom_ico_dates';
export * from './fantom_token_events';
export * from './lock_slots_events';
export * from './owner_events';
export * from './wallet_events';

  // Note: If a handler doesn't require existing field values, it is faster
  // _not_ to load the entity from the store. Instead, create it fresh with
  // `new Entity(...)`, set the fields that should be updated and save the
  // entity back to the store. Fields that were not set or unset remain
  // unchanged, allowing for partial updates to be applied.

  // It is also possible to access smart contracts from mappings. For
  // example, the contract that has emitted the event can be connected to
  // with:
  //
  // let contract = Contract.bind(event.address)
  //
  // The following functions can then be called on this contract to access
  // state variables and other data:
  //
  // - contract.DATE_LIMIT(...)
  // - contract.name(...)
  // - contract.approve(...)
  // - contract.totalSupply(...)
  // - contract.transferFrom(...)
  // - contract.isAdmin(...)
  // - contract.MAX_TOTAL_TOKEN_SUPPLY(...)
  // - contract.LOCK_SLOTS(...)
  // - contract.decimals(...)
  // - contract.balancesMinted(...)
  // - contract.dateMainEnd(...)
  // - contract.MAXIMUM_FIRST_DAY_CONTRIBUTION(...)
  // - contract.lockTerm(...)
  // - contract.wallet(...)
  // - contract.TOKEN_MAIN_CAP(...)
  // - contract.lockedTokens(...)
  // - contract.isMain(...)
  // - contract.isMainFirstDay(...)
  // - contract.numberWhitelisted(...)
  // - contract.tokensMinted(...)
  // - contract.balanceOf(...)
  // - contract.availableToMint(...)
  // - contract.tokensToEth(...)
  // - contract.unlockedTokens(...)
  // - contract.tokensIssuedTotal(...)
  // - contract.balancesMintedByType(...)
  // - contract.MINIMUM_CONTRIBUTION(...)
  // - contract.owner(...)
  // - contract.balancesMain(...)
  // - contract.symbol(...)
  // - contract.whitelist(...)
  // - contract.ethToTokens(...)
  // - contract.transfer(...)
  // - contract.dateMainStart(...)
  // - contract.isMigrationPhaseOpen(...)
  // - contract.totalEthContributed(...)
  // - contract.tokensTradeable(...)
  // - contract.tokensPerEth(...)
  // - contract.newOwner(...)
  // - contract.isAvailableLockSlot(...)
  // - contract.transferAnyERC20Token(...)
  // - contract.tokensMain(...)
  // - contract.allowance(...)
  // - contract.lockAmnt(...)
  // - contract.firstDayTokenLimit(...)
  // - contract.mayHaveLockedTokens(...)
  // - contract.ethContributed(...)