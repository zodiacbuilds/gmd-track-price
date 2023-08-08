import { Address, BigDecimal, BigInt } from '@graphprotocol/graph-ts'
import { token } from 'schema.graphql'
import { ERC20 } from '@graphprotocol/graph-ts'
import { getTokenPriceInUSD } from '../utils/prices'


export function createToken(address: Address, timestamp: BigInt): Token {
  const token = new Token(address.toHexString())
  token.timestamp = timestamp

  const erc20Token = ERC20.bind(address)
  token.name = erc20Token.name()
  token.symbol = erc20Token.symbol()
  token.decimals = erc20Token.decimals()
  token.price = getTokenPriceInUSD(token.id, timestamp)
  token.save()

  return token
}

export function getOrCreateToken(address: Address, timestamp: BigInt): Token {
  let token = Token.load(address.toHexString())

  if (token === null) {
    token = createToken(address, timestamp)
  } else {
    updateToken(token, timestamp)
  }

  return token
}

export function getToken(address: string): Token {
  let token = Token.load(address) as Token

  return token
}

export function getTokenPrice(address: string): BigDecimal {
  let token = Token.load(address) as Token

  return token.price
}

function updateToken(token: Token, timestamp: BigInt): void {
  token.timestamp = timestamp
  let price = getTokenPriceInUSD(token.id, timestamp)
  token.price = price

  token.save()
}