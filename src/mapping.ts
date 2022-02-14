import { BigInt } from "@graphprotocol/graph-ts"
import {
  FantomToken,
  UpdatedTokensPerEth,
  Whitelisted,
  TokensMinted,
  RegisterContribution,
  TokenExchangeRequested,
  IcoDateUpdated,
  RegisteredLockedTokens,
  WalletUpdated,
  OwnershipTransferProposed,
  OwnershipTransferred,
  AdminChange,
  Transfer,
  Approval
} from "../generated/FantomToken/FantomToken"
import { ExampleEntity } from "../generated/schema"

export function handleUpdatedTokensPerEth(event: UpdatedTokensPerEth): void {
  // Entities can be loaded from the store using a string ID; this ID
  // needs to be unique across all entities of the same type
  let entity = ExampleEntity.load(event.transaction.from.toHex())

  // Entities only exist after they have been saved to the store;
  // `null` checks allow to create entities on demand
  if (!entity) {
    entity = new ExampleEntity(event.transaction.from.toHex())

    // Entity fields can be set using simple assignments
    entity.count = BigInt.fromI32(0)
  }

  // BigInt and BigDecimal math are supported
  entity.count = entity.count + BigInt.fromI32(1)

  // Entity fields can be set based on event parameters
  entity.tokensPerEth = event.params.tokensPerEth

  // Entities can be written to the store with `.save()`
  entity.save()

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
}

export function handleWhitelisted(event: Whitelisted): void {}

export function handleTokensMinted(event: TokensMinted): void {}

export function handleRegisterContribution(event: RegisterContribution): void {}

export function handleTokenExchangeRequested(
  event: TokenExchangeRequested
): void {}

export function handleIcoDateUpdated(event: IcoDateUpdated): void {}

export function handleRegisteredLockedTokens(
  event: RegisteredLockedTokens
): void {}

export function handleWalletUpdated(event: WalletUpdated): void {}

export function handleOwnershipTransferProposed(
  event: OwnershipTransferProposed
): void {}

export function handleOwnershipTransferred(event: OwnershipTransferred): void {}

export function handleAdminChange(event: AdminChange): void {}

export function handleTransfer(event: Transfer): void {}

export function handleApproval(event: Approval): void {}
