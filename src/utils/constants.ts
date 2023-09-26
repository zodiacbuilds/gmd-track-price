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

export const GMDUSDC_POOL = Address.fromString('0x3DB4B7DA67dd5aF61Cb9b3C70501B1BdB24b2C22');
export const GMDUSDT_POOL = Address.fromString('0x34101Fe647ba02238256b5C5A58AeAa2e532A049');
export const GMDBTC_POOL = Address.fromString('0x147FF11D9B9Ae284c271B2fAaE7068f4CA9BB619');
export const GMDETH_POOL = Address.fromString('0x1E95A37Be8A17328fbf4b25b9ce3cE81e271BeB3');
export const ETH_ORACLE = Address.fromString('0x639fe6ab55c921f74e7fac1ee960c0b6293ba612');
export const WETH_TOKEN = '0x82aF49447D8a07e3bd95BD0d56f35241523fBab1';
export const WETH_TOKEN_ADDRESS = Address.fromString(WETH_TOKEN);
export const GMD_TOKEN = '0x4945970EfeEc98D393b4b979b9bE265A3aE28A8B';
export const GMD_TOKEN_ADDRESS = Address.fromString(GMD_TOKEN);
export const UNI_QUOTER_ADDRESS = Address.fromString('0xb27308f9F90D607463bb33eA1BeBb41C27CE5AB6');
export const UNI_V3_POOL_ADDRESS = Address.fromString('0x0632742C132413Cd47438691D8064Ff9214aC216');