import {
  Swap as SwapEvent
} from "../generated/UniswapV3Pool/UniswapV3Pool"
import {
  Swap
} from "../generated/schema"

export function getUniswapPriceInUSD(tokenAddress: token, fee: i32): BigDecimal {
  const quoter = UniswapQuoter.bind(UNI_QUOTER_ADDRESS)
  const tokenToWeth = quoter.try_quoteExactInputSingle(
      tokenAddress,
      WETH_TOKEN_ADDRESS,
      fee,
      BIG_INT_1E18,
      BIG_INT_0
    )
}

export function handleSwap(event: SwapEvent): void {
  let entity = new Swap(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  Address.fromString('0x0632742C132413Cd47438691D8064Ff9214aC216');
  const timestamp = event.block.timestamp
  const token = getOrCreateToken('0x0632742C132413Cd47438691D8064Ff9214aC216') // get or create gmd token
  const tokenPrice = getUniswapPriceInUSD('0x0632742C132413Cd47438691D8064Ff9214aC216') // get token price
  token.price = tokenPrice // set token price as attribute
  updateToken(token, timestamp) // finally save token with updated price

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
