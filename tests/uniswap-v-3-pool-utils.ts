import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
import {
  Swap
} from "../generated/UniswapV3Pool/UniswapV3Pool"

export function createSwapEvent(
  sender: Address,
  recipient: Address,
  amount0: BigInt,
  amount1: BigInt,
  sqrtPriceX96: BigInt,
  liquidity: BigInt,
  tick: i32
): Swap {
  let swapEvent = changetype<Swap>(newMockEvent())

  swapEvent.parameters = new Array()

  swapEvent.parameters.push(
    new ethereum.EventParam("sender", ethereum.Value.fromAddress(sender))
  )
  swapEvent.parameters.push(
    new ethereum.EventParam("recipient", ethereum.Value.fromAddress(recipient))
  )
  swapEvent.parameters.push(
    new ethereum.EventParam("amount0", ethereum.Value.fromSignedBigInt(amount0))
  )
  swapEvent.parameters.push(
    new ethereum.EventParam("amount1", ethereum.Value.fromSignedBigInt(amount1))
  )
  swapEvent.parameters.push(
    new ethereum.EventParam(
      "sqrtPriceX96",
      ethereum.Value.fromUnsignedBigInt(sqrtPriceX96)
    )
  )
  swapEvent.parameters.push(
    new ethereum.EventParam(
      "liquidity",
      ethereum.Value.fromUnsignedBigInt(liquidity)
    )
  )
  swapEvent.parameters.push(
    new ethereum.EventParam("tick", ethereum.Value.fromI32(tick))
  )

  return swapEvent
}
