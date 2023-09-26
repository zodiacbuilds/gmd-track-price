import { Address, BigDecimal, BigInt, TypedMap } from '@graphprotocol/graph-ts'
import { UniswapQuoter } from '../../generated/UniswapV3Pool/UniswapQuoter'
import { toDecimal } from './decimals'
import { EACAggregatorProxy as PriceOracle } from '../../generated/UniswapV3Pool/EACAggregatorProxy'
import { getTokenPrice } from '../entities/token'
import { BIG_INT_0, BIG_INT_1E18 } from './constants'

const BIG_DECIMAL_0 = BigDecimal.fromString('0');
const ETH_ORACLE = Address.fromString('0x639fe6ab55c921f74e7fac1ee960c0b6293ba612');
const WETH_TOKEN = '0x82af49447d8a07e3bd95bd0d56f35241523fbab1';
const WETH_TOKEN_ADDRESS = Address.fromString(WETH_TOKEN);
const GMD_TOKEN = '0x4945970efeec98d393b4b979b9be265a3ae28a8b';
const GMD_TOKEN_ADDRESS = Address.fromString(GMD_TOKEN);
const UNI_QUOTER_ADDRESS = Address.fromString('0xb27308f9f90d607463bb33ea1bebb41c27ce5ab6');
const UNI_V3_POOL_ADDRESS = Address.fromString('0x0632742c132413cd47438691d8064ff9214ac216');

let oracleLookupTable = new TypedMap<string, Address>()
oracleLookupTable.set(WETH_TOKEN, ETH_ORACLE)

export function getUniswapPriceInUSD(tokenAddress: Address, fee: i32): BigDecimal {
    const quoter = UniswapQuoter.bind(UNI_QUOTER_ADDRESS)
    const tokenToWeth = quoter.try_quoteExactInputSingle(
        tokenAddress,
        WETH_TOKEN_ADDRESS,
        fee,
        BIG_INT_1E18,
        BIG_INT_0
      )
      const wethPrice = getTokenPrice(WETH_TOKEN)
      return toDecimal(tokenToWeth.value, 18).times(wethPrice)
}

export function getOracleTokenPriceInUSD(oracleAddress: Address): BigDecimal {
    let oracle = PriceOracle.bind(oracleAddress)
    let price = toDecimal(oracle.latestAnswer(), 8)

    return price
}

export function getTokenPriceInUSD(token: string, timestamp: BigInt | null = null): BigDecimal {
    if (token == GMD_TOKEN) {
        return getUniswapPriceInUSD(GMD_TOKEN_ADDRESS, 3000)
    } else {
        const oracleAddress = oracleLookupTable.get(token)
        if (oracleAddress) {
            return getOracleTokenPriceInUSD(oracleAddress)    
        }

    return BIG_DECIMAL_0
    }
}

export function getETHPriceInUSD(): BigDecimal {
  let oracle = PriceOracle.bind(ETH_ORACLE)
  let price = toDecimal(oracle.latestAnswer(), 8)

  return price
}