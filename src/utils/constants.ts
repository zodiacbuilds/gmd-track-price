import { Address, BigDecimal, BigInt, Bytes } from '@graphprotocol/graph-ts';


export const BIG_INT_1E18 = BigInt.fromString('1000000000000000000');
export const BIG_INT_1E7 = BigInt.fromString('10000000');
export const BIG_INT_0 = BigInt.fromI32(0);
export const BIG_INT_1 = BigInt.fromI32(1);
export const CACHE_INTERVAL = BigInt.fromI32(600); // 10 minutes

export const BIG_DECIMAL_1E18 = BigDecimal.fromString('1e18');
export const BIG_DECIMAL_1E8 = BigDecimal.fromString('1e8');
export const BIG_DECIMAL_1E7 = BigDecimal.fromString('1e7');
export const BIG_DECIMAL_1E4 = BigDecimal.fromString('1e4');
export const BIG_DECIMAL_100 = BigDecimal.fromString('100');
export const BIG_DECIMAL_2 = BigDecimal.fromString('2');
export const BIG_DECIMAL_1 = BigDecimal.fromString('1');
export const BIG_DECIMAL_0 = BigDecimal.fromString('0');
export const BIG_DECIMAL_MIN_1 = BigDecimal.fromString('-1');
export const BIG_DECIMAL_YEAR = BigDecimal.fromString('31536000');
export const ZERO_ADDRESS = Address.fromHexString('0x0000000000000000000000000000000000000000');

export const GMDUSDC_POOL = Address.fromString('0x3db4b7da67dd5af61cb9b3c70501b1bdb24b2c22');
export const GMDUSDT_POOL = Address.fromString('0x34101fe647ba02238256b5c5a58aeaa2e532a049');
export const GMDBTC_POOL = Address.fromString('0x147ff11d9b9ae284c271b2faae7068f4ca9bb619');
export const GMDETH_POOL = Address.fromString('0x1e95a37be8a17328fbf4b25b9ce3ce81e271beb3');
export const ETH_ORACLE = Address.fromString('0x639fe6ab55c921f74e7fac1ee960c0b6293ba612');
export const WETH_TOKEN = '0x82af49447d8a07e3bd95bd0d56f35241523fbab1';
export const WETH_TOKEN_ADDRESS = Address.fromString(WETH_TOKEN);
export const GMD_TOKEN = '0x4945970efeec98d393b4b979b9be265a3ae28a8b';
export const GMD_TOKEN_ADDRESS = Address.fromString(GMD_TOKEN);
export const UNI_QUOTER_ADDRESS = Address.fromString('0xb27308f9f90d607463bb33ea1bebb41c27ce5ab6');
export const UNI_V3_POOL_ADDRESS = Address.fromString('0x0632742c132413cd47438691d8064ff9214ac216');