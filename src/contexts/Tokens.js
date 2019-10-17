import React, { createContext, useContext, useReducer, useMemo, useCallback, useEffect } from 'react'
import { useWeb3Context } from 'web3-react'
import { ethers } from 'ethers'

import {
  isAddress,
  getTokenName,
  getTokenSymbol,
  getTokenDecimals,
  getTokenExchangeAddressFromFactory,
  safeAccess
} from '../utils'

const NAME = 'name'
const SYMBOL = 'symbol'
const DECIMALS = 'decimals'
const EXCHANGE_ADDRESS = 'exchangeAddress'

const UPDATE = 'UPDATE'

const ETH = {
  ETH: {
    [NAME]: 'Ethereum',
    [SYMBOL]: 'ETH',
    [DECIMALS]: 18,
    [EXCHANGE_ADDRESS]: null
  }
}

const INITIAL_TOKENS_CONTEXT = {
  4: {
    '0x5592EC0cfb4dbc12D3aB100b257153436a1f0FEa': {
      [NAME]: 'Dai',
      [SYMBOL]: 'DAI',
      [DECIMALS]: 18,
      [EXCHANGE_ADDRESS]: '0xaF51BaAA766b65E8B3Ee0C2c33186325ED01eBD5'
    },
    '0xbD303C3f7C203C6a129eaC1696473998d96E1dEb': {
      [NAME]: 'yBTC_Oct2019',
      [SYMBOL]: 'yBTC_Oct2019',
      [DECIMALS]: 18,
      [EXCHANGE_ADDRESS]: '0xaF51BaAA766b65E8B3Ee0C2c33186325ED01eBD5'
    },
    '0x8d76B889C0400e51Ed9bdA7d927695d21031f657': {
      [NAME]: 'yBTC_Nov2019',
      [SYMBOL]: 'yBTC_Nov2019',
      [DECIMALS]: 18,
      [EXCHANGE_ADDRESS]: '0xaF51BaAA766b65E8B3Ee0C2c33186325ED01eBD5'
    },
    '0x41c981379062473097b273E9713Bf373E9f6e76C': {
      [NAME]: 'yBTC_Dec2019',
      [SYMBOL]: 'yBTC_Dec2019',
      [DECIMALS]: 18,
      [EXCHANGE_ADDRESS]: '0xaF51BaAA766b65E8B3Ee0C2c33186325ED01eBD5'
    } //,
    // '0x9Eb52B550403FD420e87e0c8931EE79F981820ff': {
    //   [NAME]: 'yToken_Sep30',
    //   [SYMBOL]: 'yToken_Sep30',
    //   [DECIMALS]: 18,
    //   [EXCHANGE_ADDRESS]: '0x2bFDf1815b7F92Fa99DdE2333c3E180B18Facf2d'
    // },
    // '0x72C310e1C80b2Bb3BFbdAcbD39f1E3AbBcE6cFef': {
    //   [NAME]: 'yToken_Oct31',
    //   [SYMBOL]: 'yToken_Oct31',
    //   [DECIMALS]: 18,
    //   [EXCHANGE_ADDRESS]: '0xaF51BaAA766b65E8B3Ee0C2c33186325ED01eBD5'
    // },
    // '0x66F982cf498e108Fa47031bEEF4cbCdBe91Ef1f1': {
    //   [NAME]: 'yToken_Nov29',
    //   [SYMBOL]: 'yToken_Nov29',
    //   [DECIMALS]: 18,
    //   [EXCHANGE_ADDRESS]: '0xaF51BaAA766b65E8B3Ee0C2c33186325ED01eBD5'
    // },
    // '0x24CAE71C6b5951a25a0b9490016EFd25EDDd84C3': {
    //   [NAME]: 'yToken_Dec31',
    //   [SYMBOL]: 'yToken_Dec31',
    //   [DECIMALS]: 18,
    //   [EXCHANGE_ADDRESS]: '0xaE6718d20BFcAd9B5D428b1D566A5F60E3f3B0eC'
    // }
  }
}

const TokensContext = createContext()

function useTokensContext() {
  return useContext(TokensContext)
}

function reducer(state, { type, payload }) {
  switch (type) {
    case UPDATE: {
      const { networkId, tokenAddress, name, symbol, decimals, exchangeAddress } = payload
      return {
        ...state,
        [networkId]: {
          ...(safeAccess(state, [networkId]) || {}),
          [tokenAddress]: {
            [NAME]: name,
            [SYMBOL]: symbol,
            [DECIMALS]: decimals,
            [EXCHANGE_ADDRESS]: exchangeAddress
          }
        }
      }
    }
    default: {
      throw Error(`Unexpected action type in TokensContext reducer: '${type}'.`)
    }
  }
}

export default function Provider({ children }) {
  const [state, dispatch] = useReducer(reducer, INITIAL_TOKENS_CONTEXT)

  const update = useCallback((networkId, tokenAddress, name, symbol, decimals, exchangeAddress) => {
    dispatch({ type: UPDATE, payload: { networkId, tokenAddress, name, symbol, decimals, exchangeAddress } })
  }, [])

  return (
    <TokensContext.Provider value={useMemo(() => [state, { update }], [state, update])}>
      {children}
    </TokensContext.Provider>
  )
}

export function useTokenDetails(tokenAddress) {
  const { networkId, library } = useWeb3Context()

  const [state, { update }] = useTokensContext()
  const allTokensInNetwork = { ...ETH, ...(safeAccess(state, [networkId]) || {}) }
  const { [NAME]: name, [SYMBOL]: symbol, [DECIMALS]: decimals, [EXCHANGE_ADDRESS]: exchangeAddress } =
    safeAccess(allTokensInNetwork, [tokenAddress]) || {}

  useEffect(() => {
    if (
      isAddress(tokenAddress) &&
      (name === undefined || symbol === undefined || decimals === undefined || exchangeAddress === undefined) &&
      (networkId || networkId === 0) &&
      library
    ) {
      let stale = false

      const namePromise = getTokenName(tokenAddress, library).catch(() => null)
      const symbolPromise = getTokenSymbol(tokenAddress, library).catch(() => null)
      const decimalsPromise = getTokenDecimals(tokenAddress, library).catch(() => null)
      const exchangeAddressPromise = getTokenExchangeAddressFromFactory(tokenAddress, networkId, library).catch(
        () => null
      )

      Promise.all([namePromise, symbolPromise, decimalsPromise, exchangeAddressPromise]).then(
        ([resolvedName, resolvedSymbol, resolvedDecimals, resolvedExchangeAddress]) => {
          if (!stale) {
            update(networkId, tokenAddress, resolvedName, resolvedSymbol, resolvedDecimals, resolvedExchangeAddress)
          }
        }
      )
      return () => {
        stale = true
      }
    }
  }, [tokenAddress, name, symbol, decimals, exchangeAddress, networkId, library, update])

  return { name, symbol, decimals, exchangeAddress }
}

export function useAllTokenDetails(requireExchange = true) {
  const { networkId } = useWeb3Context()

  const [state] = useTokensContext()
  const tokenDetails = { ...ETH, ...(safeAccess(state, [networkId]) || {}) }

  return requireExchange
    ? Object.keys(tokenDetails)
        .filter(
          tokenAddress =>
            tokenAddress === 'ETH' ||
            (safeAccess(tokenDetails, [tokenAddress, EXCHANGE_ADDRESS]) &&
              safeAccess(tokenDetails, [tokenAddress, EXCHANGE_ADDRESS]) !== ethers.constants.AddressZero)
        )
        .reduce((accumulator, tokenAddress) => {
          accumulator[tokenAddress] = tokenDetails[tokenAddress]
          return accumulator
        }, {})
    : tokenDetails
}
