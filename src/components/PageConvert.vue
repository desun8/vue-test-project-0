<script setup lang="ts">
import { ref, watch } from 'vue'
import { store } from '@/store'
import Title from './Title.vue'
import ConvertInput from './ConvertInput.vue'
import { CURRENCIES_CODE_LIST } from '@/const'
import { truncateToTwoDecimals } from '@/utils/truncateToTwoDecimals'

let lastChangedInput: 1 | 2 = 1

const currency1 = ref(
  store.currency !== CURRENCIES_CODE_LIST[0] ? CURRENCIES_CODE_LIST[0] : CURRENCIES_CODE_LIST[1],
)

if (!store.currencyData) throw new Error('Ошибка в данных.')

const input1 = ref(1)
const currency2 = ref(store.currency)
const input2 = ref(
  Number(
    truncateToTwoDecimals(
      store.currencyData[`${currency1.value}-${currency2.value}`.toLowerCase()] * input1.value,
    ),
  ),
)

function convert(value: number, fromCurrency: string, toCurrency: string) {
  const rate = store.currencyData![`${fromCurrency}-${toCurrency}`.toLowerCase()]
  return truncateToTwoDecimals(value * +rate)
}

function updateInput(sourceInput: 1 | 2) {
  if (sourceInput === 1) {
    input2.value = convert(input1.value, currency1.value, currency2.value)
  } else {
    input1.value = convert(input2.value, currency2.value, currency1.value)
  }
}

function handleInputChange(sourceInput: 1 | 2) {
  updateInput(sourceInput)
  lastChangedInput = sourceInput
}

watch([currency1, currency2], (currVal, prevVal) => {
  if (currVal[0] === currVal[1]) currency2.value = prevVal[0]
  if (currVal[1] === currVal[0]) currency1.value = prevVal[1]

  updateInput(lastChangedInput)
})
</script>

<template>
  <Title>Конвертация</Title>

  <div :class="cls.block">
    <ConvertInput
      v-model.number="input1"
      v-model:currency="currency1"
      @updateInput="handleInputChange(1)"
    />
    <ConvertInput
      v-model.number="input2"
      v-model:currency="currency2"
      @updateInput="handleInputChange(2)"
    />
  </div>
</template>

<style module="cls">
.block {
  display: grid;
  gap: 16px;
}
</style>
