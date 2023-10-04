import { Address } from "@graphprotocol/graph-ts"
import { Swap as SwapEvent } from "../generated/UniswapV3Pool/UniswapV3Pool"
import { Swap } from "../generated/schema"
import { getOrCreateToken } from "./entities/token"
import { updateToken } from "./entities/token"
import { GMD_TOKEN } from "./utils/constants"
import { updateOrCreateDayData, updateOrCreateHourData } from "./entities/token"

export function handleSwap(event: SwapEvent): void {
  let entity = new Swap(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  const address = Address.fromString(GMD_TOKEN);
  const timestamp = event.block.timestamp
  const token = getOrCreateToken(address, timestamp) // get or create gmd token
  updateToken(token, timestamp) // finally save token with updated price
  updateOrCreateHourData(token, timestamp)
  updateOrCreateDayData(token, timestamp)

  entity.sender = event.params.sender
  entity.recipient = event.params.recipient
  entity.amount0 = event.params.amount0
  entity.amount1 = event.params.amount1
  entity.sqrtPriceX96 = event.params.sqrtPriceX96
  entity.liquidity = event.params.liquidity
  entity.tick = event.params.tick

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
