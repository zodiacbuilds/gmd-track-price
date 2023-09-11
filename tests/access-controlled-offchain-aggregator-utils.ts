import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt, Bytes } from "@graphprotocol/graph-ts"
import {
  AnswerUpdated,
} from "../generated/AccessControlledOffchainAggregator/AccessControlledOffchainAggregator"

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