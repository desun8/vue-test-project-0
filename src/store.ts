import { reactive } from 'vue'
import { useFetch } from '@vueuse/core'
import { CURRENCIES } from './const'
import type { ExchangeRates } from './types'

export const store = reactive({
  currency: CURRENCIES.RUB.code,
  changeCurrency(currencyCode: string) {
    this.currency = currencyCode
  },

  currencyData: null,
  async fetchCurrencyData() {
    return useFetch<ExchangeRates>('https://status.neuralgeneration.com/api/currency').json()
  },
})
