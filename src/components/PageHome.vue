<script setup lang="ts">
import { computed } from 'vue'
import { CURRENCIES_CODE, CURRENCIES_CODE_LIST } from '../const'
import { store } from '@/store'
import Title from './Title.vue'
import CurrencyCard from './CurrencyCard.vue'

interface Currency {
  key: string
  value: number | undefined
  code: (typeof CURRENCIES_CODE)[keyof typeof CURRENCIES_CODE]
}

const currentCurrency = computed(() => store.currency)
const curencyData = computed(() => store.currencyData)

const visibleCurrency = computed<undefined | Currency[]>(() => {
  if (!curencyData.value) return

  const currencies = CURRENCIES_CODE_LIST.filter((curr) => curr !== currentCurrency.value)
  if (!currencies.length) return

  return currencies.map((targetCurrency): Currency => {
    const key = `${targetCurrency}-${currentCurrency.value}`.toLowerCase()
    return {
      key,
      value: curencyData.value![key],
      code: targetCurrency,
    }
  })
})
</script>

<template>
  <Title>Главная</Title>

  <div :class="cls.container">
    <template v-for="curr in visibleCurrency" :key="curr.key">
      <CurrencyCard
        v-if="curr.value !== undefined"
        :currency-type="curr.code"
        :title="curr.code"
        :value="curr.value"
      />
    </template>
  </div>
</template>

<style module="cls">
.container {
  display: grid;
  gap: 16px;

  @media (width > 768px) {
    grid-template-columns: 1fr 1fr;
  }
}
</style>
