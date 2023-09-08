import {
  AddedAccess as AddedAccessEvent,
  AnswerUpdated as AnswerUpdatedEvent,
  BillingAccessControllerSet as BillingAccessControllerSetEvent,
  BillingSet as BillingSetEvent,
  CheckAccessDisabled as CheckAccessDisabledEvent,
  CheckAccessEnabled as CheckAccessEnabledEvent,
  ConfigSet as ConfigSetEvent,
  LinkTokenSet as LinkTokenSetEvent,
  NewRound as NewRoundEvent,
  NewTransmission as NewTransmissionEvent,
  OraclePaid as OraclePaidEvent,
  OwnershipTransferRequested as OwnershipTransferRequestedEvent,
  OwnershipTransferred as OwnershipTransferredEvent,
  PayeeshipTransferRequested as PayeeshipTransferRequestedEvent,
  PayeeshipTransferred as PayeeshipTransferredEvent,
  RemovedAccess as RemovedAccessEvent,
  RequesterAccessControllerSet as RequesterAccessControllerSetEvent,
  RoundRequested as RoundRequestedEvent,
  ValidatorConfigSet as ValidatorConfigSetEvent
} from "../generated/AccessControlledOffchainAggregator/AccessControlledOffchainAggregator"
import {
  AddedAccess,
  AnswerUpdated,
  BillingAccessControllerSet,
  BillingSet,
  CheckAccessDisabled,
  CheckAccessEnabled,
  ConfigSet,
  LinkTokenSet,
  NewRound,
  NewTransmission,
  OraclePaid,
  OwnershipTransferRequested,
  OwnershipTransferred,
  PayeeshipTransferRequested,
  PayeeshipTransferred,
  RemovedAccess,
  RequesterAccessControllerSet,
  RoundRequested,
  ValidatorConfigSet
} from "../generated/schema"

export function handleAddedAccess(event: AddedAccessEvent): void {
  let entity = new AddedAccess(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.user = event.params.user

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleAnswerUpdated(event: AnswerUpdatedEvent): void {
  let entity = new AnswerUpdated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.current = event.params.current
  entity.roundId = event.params.roundId
  entity.updatedAt = event.params.updatedAt

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleBillingAccessControllerSet(
  event: BillingAccessControllerSetEvent
): void {
  let entity = new BillingAccessControllerSet(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.old = event.params.old
  entity.current = event.params.current

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleBillingSet(event: BillingSetEvent): void {
  let entity = new BillingSet(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.maximumGasPrice = event.params.maximumGasPrice
  entity.reasonableGasPrice = event.params.reasonableGasPrice
  entity.microLinkPerEth = event.params.microLinkPerEth
  entity.linkGweiPerObservation = event.params.linkGweiPerObservation
  entity.linkGweiPerTransmission = event.params.linkGweiPerTransmission

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleCheckAccessDisabled(
  event: CheckAccessDisabledEvent
): void {
  let entity = new CheckAccessDisabled(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleCheckAccessEnabled(event: CheckAccessEnabledEvent): void {
  let entity = new CheckAccessEnabled(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleConfigSet(event: ConfigSetEvent): void {
  let entity = new ConfigSet(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.previousConfigBlockNumber = event.params.previousConfigBlockNumber
  entity.configCount = event.params.configCount
  entity.signers = event.params.signers
  entity.transmitters = event.params.transmitters
  entity.threshold = event.params.threshold
  entity.encodedConfigVersion = event.params.encodedConfigVersion
  entity.encoded = event.params.encoded

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleLinkTokenSet(event: LinkTokenSetEvent): void {
  let entity = new LinkTokenSet(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity._oldLinkToken = event.params._oldLinkToken
  entity._newLinkToken = event.params._newLinkToken

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleNewRound(event: NewRoundEvent): void {
  let entity = new NewRound(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.roundId = event.params.roundId
  entity.startedBy = event.params.startedBy
  entity.startedAt = event.params.startedAt

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleNewTransmission(event: NewTransmissionEvent): void {
  let entity = new NewTransmission(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.aggregatorRoundId = event.params.aggregatorRoundId
  entity.answer = event.params.answer
  entity.transmitter = event.params.transmitter
  entity.observations = event.params.observations
  entity.observers = event.params.observers
  entity.rawReportContext = event.params.rawReportContext

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleOraclePaid(event: OraclePaidEvent): void {
  let entity = new OraclePaid(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.transmitter = event.params.transmitter
  entity.payee = event.params.payee
  entity.amount = event.params.amount
  entity.linkToken = event.params.linkToken

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleOwnershipTransferRequested(
  event: OwnershipTransferRequestedEvent
): void {
  let entity = new OwnershipTransferRequested(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.from = event.params.from
  entity.to = event.params.to

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleOwnershipTransferred(
  event: OwnershipTransferredEvent
): void {
  let entity = new OwnershipTransferred(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.from = event.params.from
  entity.to = event.params.to

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handlePayeeshipTransferRequested(
  event: PayeeshipTransferRequestedEvent
): void {
  let entity = new PayeeshipTransferRequested(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.transmitter = event.params.transmitter
  entity.current = event.params.current
  entity.proposed = event.params.proposed

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handlePayeeshipTransferred(
  event: PayeeshipTransferredEvent
): void {
  let entity = new PayeeshipTransferred(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.transmitter = event.params.transmitter
  entity.previous = event.params.previous
  entity.current = event.params.current

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleRemovedAccess(event: RemovedAccessEvent): void {
  let entity = new RemovedAccess(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.user = event.params.user

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleRequesterAccessControllerSet(
  event: RequesterAccessControllerSetEvent
): void {
  let entity = new RequesterAccessControllerSet(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.old = event.params.old
  entity.current = event.params.current

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleRoundRequested(event: RoundRequestedEvent): void {
  let entity = new RoundRequested(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.requester = event.params.requester
  entity.configDigest = event.params.configDigest
  entity.epoch = event.params.epoch
  entity.round = event.params.round

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleValidatorConfigSet(event: ValidatorConfigSetEvent): void {
  let entity = new ValidatorConfigSet(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.previousValidator = event.params.previousValidator
  entity.previousGasLimit = event.params.previousGasLimit
  entity.currentValidator = event.params.currentValidator
  entity.currentGasLimit = event.params.currentGasLimit

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
