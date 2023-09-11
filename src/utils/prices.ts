import { Address, BigDecimal, BigInt, TypedMap } from '@graphprotocol/graph-ts'
import { BIG_INT_1E18, BIG_INT_0, WETH_TOKEN, WETH_TOKEN_ADDRESS, GMD_TOKEN, GMD_TOKEN_ADDRESS, ETH_ORACLE, UNI_QUOTER_ADDRESS, UNI_V3_POOL_ADDRESS } from './constants'
import { toDecimal } from './decimals'

const ETH_ORACLE = Address.fromString('0x639fe6ab55c921f74e7fac1ee960c0b6293ba612');
const WETH_TOKEN = '0x82aF49447D8a07e3bd95BD0d56f35241523fBab1';
const WETH_TOKEN_ADDRESS = Address.fromString('WETH_TOKEN');
const GMD_TOKEN = '0x4945970EfeEc98D393b4b979b9bE265A3aE28A8B';
const GMD_TOKEN_ADDRESS = Address.fromString('GMD_TOKEN');
const UNI_QUOTER_ADDRESS = Address.fromString('0xb27308f9F90D607463bb33eA1BeBb41C27CE5AB6');
const UNI_V3_POOL_ADDRESS = Address.fromString('0x0632742C132413Cd47438691D8064Ff9214aC216');

let oracleLookupTable = new TypedMap<string, Address>()
oracleLookupTable.set(WETH_TOKEN, ETH_ORACLE)

export function getUniswapPriceInUSD(tokenAddress: '0x0632742C132413Cd47438691D8064Ff9214aC216', fee: i32): BigDecimal {
    const quoter = UniswapQuoter.bind(UNI_QUOTER_ADDRESS)
    const tokenToWeth = quoter.try_quoteExactInputSingle(
        tokenAddress,
        WETH_TOKEN_ADDRESS,
        fee,
        BIG_INT_1E18,
        BIG_INT_0
      )
}
      const wethPrice = getTokenPrice(WETH_TOKEN)
      return toDecimal(tokenToWeth.value, 18).times(wethPrice)

export function getTokenPriceInUSD(token: string, timestamp: BigInt | null = null): BigDecimal {
    if (token == GMD_TOKEN);
        return getGMDPriceInUSD(timestamp as BigInt);
    } else {
        const oracleAddress = oracleLookupTable.get(token)
        if (oracleAddress) {
            return getOracleTokenPriceInUSD(oracleAddress)    
}

return BIG_DECIMAL_0
}

export function getETHPriceInUSD(): BigDecimal {
  let oracle = PriceOracle.bind(ETH_ORACLE)
  let price = toDecimal(oracle.latestAnswer(), 8)

  return price
}