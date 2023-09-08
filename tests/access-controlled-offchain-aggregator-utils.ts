import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt, Bytes } from "@graphprotocol/graph-ts"
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
} from "../generated/AccessControlledOffchainAggregator/AccessControlledOffchainAggregator"

export function createAddedAccessEvent(user: Address): AddedAccess {
  let addedAccessEvent = changetype<AddedAccess>(newMockEvent())

  addedAccessEvent.parameters = new Array()

  addedAccessEvent.parameters.push(
    new ethereum.EventParam("user", ethereum.Value.fromAddress(user))
  )

  return addedAccessEvent
}

export function createAnswerUpdatedEvent(
  current: BigInt,
  roundId: BigInt,
  updatedAt: BigInt
): AnswerUpdated {
  let answerUpdatedEvent = changetype<AnswerUpdated>(newMockEvent())

  answerUpdatedEvent.parameters = new Array()

  answerUpdatedEvent.parameters.push(
    new ethereum.EventParam("current", ethereum.Value.fromSignedBigInt(current))
  )
  answerUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "roundId",
      ethereum.Value.fromUnsignedBigInt(roundId)
    )
  )
  answerUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "updatedAt",
      ethereum.Value.fromUnsignedBigInt(updatedAt)
    )
  )

  return answerUpdatedEvent
}

export function createBillingAccessControllerSetEvent(
  old: Address,
  current: Address
): BillingAccessControllerSet {
  let billingAccessControllerSetEvent = changetype<BillingAccessControllerSet>(
    newMockEvent()
  )

  billingAccessControllerSetEvent.parameters = new Array()

  billingAccessControllerSetEvent.parameters.push(
    new ethereum.EventParam("old", ethereum.Value.fromAddress(old))
  )
  billingAccessControllerSetEvent.parameters.push(
    new ethereum.EventParam("current", ethereum.Value.fromAddress(current))
  )

  return billingAccessControllerSetEvent
}

export function createBillingSetEvent(
  maximumGasPrice: BigInt,
  reasonableGasPrice: BigInt,
  microLinkPerEth: BigInt,
  linkGweiPerObservation: BigInt,
  linkGweiPerTransmission: BigInt
): BillingSet {
  let billingSetEvent = changetype<BillingSet>(newMockEvent())

  billingSetEvent.parameters = new Array()

  billingSetEvent.parameters.push(
    new ethereum.EventParam(
      "maximumGasPrice",
      ethereum.Value.fromUnsignedBigInt(maximumGasPrice)
    )
  )
  billingSetEvent.parameters.push(
    new ethereum.EventParam(
      "reasonableGasPrice",
      ethereum.Value.fromUnsignedBigInt(reasonableGasPrice)
    )
  )
  billingSetEvent.parameters.push(
    new ethereum.EventParam(
      "microLinkPerEth",
      ethereum.Value.fromUnsignedBigInt(microLinkPerEth)
    )
  )
  billingSetEvent.parameters.push(
    new ethereum.EventParam(
      "linkGweiPerObservation",
      ethereum.Value.fromUnsignedBigInt(linkGweiPerObservation)
    )
  )
  billingSetEvent.parameters.push(
    new ethereum.EventParam(
      "linkGweiPerTransmission",
      ethereum.Value.fromUnsignedBigInt(linkGweiPerTransmission)
    )
  )

  return billingSetEvent
}

export function createCheckAccessDisabledEvent(): CheckAccessDisabled {
  let checkAccessDisabledEvent = changetype<CheckAccessDisabled>(newMockEvent())

  checkAccessDisabledEvent.parameters = new Array()

  return checkAccessDisabledEvent
}

export function createCheckAccessEnabledEvent(): CheckAccessEnabled {
  let checkAccessEnabledEvent = changetype<CheckAccessEnabled>(newMockEvent())

  checkAccessEnabledEvent.parameters = new Array()

  return checkAccessEnabledEvent
}

export function createConfigSetEvent(
  previousConfigBlockNumber: BigInt,
  configCount: BigInt,
  signers: Array<Address>,
  transmitters: Array<Address>,
  threshold: i32,
  encodedConfigVersion: BigInt,
  encoded: Bytes
): ConfigSet {
  let configSetEvent = changetype<ConfigSet>(newMockEvent())

  configSetEvent.parameters = new Array()

  configSetEvent.parameters.push(
    new ethereum.EventParam(
      "previousConfigBlockNumber",
      ethereum.Value.fromUnsignedBigInt(previousConfigBlockNumber)
    )
  )
  configSetEvent.parameters.push(
    new ethereum.EventParam(
      "configCount",
      ethereum.Value.fromUnsignedBigInt(configCount)
    )
  )
  configSetEvent.parameters.push(
    new ethereum.EventParam("signers", ethereum.Value.fromAddressArray(signers))
  )
  configSetEvent.parameters.push(
    new ethereum.EventParam(
      "transmitters",
      ethereum.Value.fromAddressArray(transmitters)
    )
  )
  configSetEvent.parameters.push(
    new ethereum.EventParam(
      "threshold",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(threshold))
    )
  )
  configSetEvent.parameters.push(
    new ethereum.EventParam(
      "encodedConfigVersion",
      ethereum.Value.fromUnsignedBigInt(encodedConfigVersion)
    )
  )
  configSetEvent.parameters.push(
    new ethereum.EventParam("encoded", ethereum.Value.fromBytes(encoded))
  )

  return configSetEvent
}

export function createLinkTokenSetEvent(
  _oldLinkToken: Address,
  _newLinkToken: Address
): LinkTokenSet {
  let linkTokenSetEvent = changetype<LinkTokenSet>(newMockEvent())

  linkTokenSetEvent.parameters = new Array()

  linkTokenSetEvent.parameters.push(
    new ethereum.EventParam(
      "_oldLinkToken",
      ethereum.Value.fromAddress(_oldLinkToken)
    )
  )
  linkTokenSetEvent.parameters.push(
    new ethereum.EventParam(
      "_newLinkToken",
      ethereum.Value.fromAddress(_newLinkToken)
    )
  )

  return linkTokenSetEvent
}

export function createNewRoundEvent(
  roundId: BigInt,
  startedBy: Address,
  startedAt: BigInt
): NewRound {
  let newRoundEvent = changetype<NewRound>(newMockEvent())

  newRoundEvent.parameters = new Array()

  newRoundEvent.parameters.push(
    new ethereum.EventParam(
      "roundId",
      ethereum.Value.fromUnsignedBigInt(roundId)
    )
  )
  newRoundEvent.parameters.push(
    new ethereum.EventParam("startedBy", ethereum.Value.fromAddress(startedBy))
  )
  newRoundEvent.parameters.push(
    new ethereum.EventParam(
      "startedAt",
      ethereum.Value.fromUnsignedBigInt(startedAt)
    )
  )

  return newRoundEvent
}

export function createNewTransmissionEvent(
  aggregatorRoundId: BigInt,
  answer: BigInt,
  transmitter: Address,
  observations: Array<BigInt>,
  observers: Bytes,
  rawReportContext: Bytes
): NewTransmission {
  let newTransmissionEvent = changetype<NewTransmission>(newMockEvent())

  newTransmissionEvent.parameters = new Array()

  newTransmissionEvent.parameters.push(
    new ethereum.EventParam(
      "aggregatorRoundId",
      ethereum.Value.fromUnsignedBigInt(aggregatorRoundId)
    )
  )
  newTransmissionEvent.parameters.push(
    new ethereum.EventParam("answer", ethereum.Value.fromSignedBigInt(answer))
  )
  newTransmissionEvent.parameters.push(
    new ethereum.EventParam(
      "transmitter",
      ethereum.Value.fromAddress(transmitter)
    )
  )
  newTransmissionEvent.parameters.push(
    new ethereum.EventParam(
      "observations",
      ethereum.Value.fromSignedBigIntArray(observations)
    )
  )
  newTransmissionEvent.parameters.push(
    new ethereum.EventParam("observers", ethereum.Value.fromBytes(observers))
  )
  newTransmissionEvent.parameters.push(
    new ethereum.EventParam(
      "rawReportContext",
      ethereum.Value.fromFixedBytes(rawReportContext)
    )
  )

  return newTransmissionEvent
}

export function createOraclePaidEvent(
  transmitter: Address,
  payee: Address,
  amount: BigInt,
  linkToken: Address
): OraclePaid {
  let oraclePaidEvent = changetype<OraclePaid>(newMockEvent())

  oraclePaidEvent.parameters = new Array()

  oraclePaidEvent.parameters.push(
    new ethereum.EventParam(
      "transmitter",
      ethereum.Value.fromAddress(transmitter)
    )
  )
  oraclePaidEvent.parameters.push(
    new ethereum.EventParam("payee", ethereum.Value.fromAddress(payee))
  )
  oraclePaidEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )
  oraclePaidEvent.parameters.push(
    new ethereum.EventParam("linkToken", ethereum.Value.fromAddress(linkToken))
  )

  return oraclePaidEvent
}

export function createOwnershipTransferRequestedEvent(
  from: Address,
  to: Address
): OwnershipTransferRequested {
  let ownershipTransferRequestedEvent = changetype<OwnershipTransferRequested>(
    newMockEvent()
  )

  ownershipTransferRequestedEvent.parameters = new Array()

  ownershipTransferRequestedEvent.parameters.push(
    new ethereum.EventParam("from", ethereum.Value.fromAddress(from))
  )
  ownershipTransferRequestedEvent.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  )

  return ownershipTransferRequestedEvent
}

export function createOwnershipTransferredEvent(
  from: Address,
  to: Address
): OwnershipTransferred {
  let ownershipTransferredEvent = changetype<OwnershipTransferred>(
    newMockEvent()
  )

  ownershipTransferredEvent.parameters = new Array()

  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam("from", ethereum.Value.fromAddress(from))
  )
  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  )

  return ownershipTransferredEvent
}

export function createPayeeshipTransferRequestedEvent(
  transmitter: Address,
  current: Address,
  proposed: Address
): PayeeshipTransferRequested {
  let payeeshipTransferRequestedEvent = changetype<PayeeshipTransferRequested>(
    newMockEvent()
  )

  payeeshipTransferRequestedEvent.parameters = new Array()

  payeeshipTransferRequestedEvent.parameters.push(
    new ethereum.EventParam(
      "transmitter",
      ethereum.Value.fromAddress(transmitter)
    )
  )
  payeeshipTransferRequestedEvent.parameters.push(
    new ethereum.EventParam("current", ethereum.Value.fromAddress(current))
  )
  payeeshipTransferRequestedEvent.parameters.push(
    new ethereum.EventParam("proposed", ethereum.Value.fromAddress(proposed))
  )

  return payeeshipTransferRequestedEvent
}

export function createPayeeshipTransferredEvent(
  transmitter: Address,
  previous: Address,
  current: Address
): PayeeshipTransferred {
  let payeeshipTransferredEvent = changetype<PayeeshipTransferred>(
    newMockEvent()
  )

  payeeshipTransferredEvent.parameters = new Array()

  payeeshipTransferredEvent.parameters.push(
    new ethereum.EventParam(
      "transmitter",
      ethereum.Value.fromAddress(transmitter)
    )
  )
  payeeshipTransferredEvent.parameters.push(
    new ethereum.EventParam("previous", ethereum.Value.fromAddress(previous))
  )
  payeeshipTransferredEvent.parameters.push(
    new ethereum.EventParam("current", ethereum.Value.fromAddress(current))
  )

  return payeeshipTransferredEvent
}

export function createRemovedAccessEvent(user: Address): RemovedAccess {
  let removedAccessEvent = changetype<RemovedAccess>(newMockEvent())

  removedAccessEvent.parameters = new Array()

  removedAccessEvent.parameters.push(
    new ethereum.EventParam("user", ethereum.Value.fromAddress(user))
  )

  return removedAccessEvent
}

export function createRequesterAccessControllerSetEvent(
  old: Address,
  current: Address
): RequesterAccessControllerSet {
  let requesterAccessControllerSetEvent = changetype<
    RequesterAccessControllerSet
  >(newMockEvent())

  requesterAccessControllerSetEvent.parameters = new Array()

  requesterAccessControllerSetEvent.parameters.push(
    new ethereum.EventParam("old", ethereum.Value.fromAddress(old))
  )
  requesterAccessControllerSetEvent.parameters.push(
    new ethereum.EventParam("current", ethereum.Value.fromAddress(current))
  )

  return requesterAccessControllerSetEvent
}

export function createRoundRequestedEvent(
  requester: Address,
  configDigest: Bytes,
  epoch: BigInt,
  round: i32
): RoundRequested {
  let roundRequestedEvent = changetype<RoundRequested>(newMockEvent())

  roundRequestedEvent.parameters = new Array()

  roundRequestedEvent.parameters.push(
    new ethereum.EventParam("requester", ethereum.Value.fromAddress(requester))
  )
  roundRequestedEvent.parameters.push(
    new ethereum.EventParam(
      "configDigest",
      ethereum.Value.fromFixedBytes(configDigest)
    )
  )
  roundRequestedEvent.parameters.push(
    new ethereum.EventParam("epoch", ethereum.Value.fromUnsignedBigInt(epoch))
  )
  roundRequestedEvent.parameters.push(
    new ethereum.EventParam(
      "round",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(round))
    )
  )

  return roundRequestedEvent
}

export function createValidatorConfigSetEvent(
  previousValidator: Address,
  previousGasLimit: BigInt,
  currentValidator: Address,
  currentGasLimit: BigInt
): ValidatorConfigSet {
  let validatorConfigSetEvent = changetype<ValidatorConfigSet>(newMockEvent())

  validatorConfigSetEvent.parameters = new Array()

  validatorConfigSetEvent.parameters.push(
    new ethereum.EventParam(
      "previousValidator",
      ethereum.Value.fromAddress(previousValidator)
    )
  )
  validatorConfigSetEvent.parameters.push(
    new ethereum.EventParam(
      "previousGasLimit",
      ethereum.Value.fromUnsignedBigInt(previousGasLimit)
    )
  )
  validatorConfigSetEvent.parameters.push(
    new ethereum.EventParam(
      "currentValidator",
      ethereum.Value.fromAddress(currentValidator)
    )
  )
  validatorConfigSetEvent.parameters.push(
    new ethereum.EventParam(
      "currentGasLimit",
      ethereum.Value.fromUnsignedBigInt(currentGasLimit)
    )
  )

  return validatorConfigSetEvent
}
