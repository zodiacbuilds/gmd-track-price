import { AnswerUpdated } from '../../generated/AccessControlledOffchainAggregator/AccessControlledOffchainAggregator'

import { updateInvestmentVaults } from '../entities/investmentVault'
import { updatePricedTokenPrices } from '../entities/pricedToken'


export function onAnswerUpdated(event: AnswerUpdated): void {
    // Update priced token prices
    updatePricedTokenPrices(event.block.timestamp)

    // Update investments & metrics
    updateInvestmentVaults(event.block.timestamp)
}
