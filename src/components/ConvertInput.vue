<script setup lang="ts">
import { truncateToTwoDecimals } from '@/utils/truncateToTwoDecimals'
import CurrencyDropdown from './CurrencyDropdown.vue'
import { watch } from 'vue'

defineEmits(['updateInput'])

const value = defineModel<number>()
const currency = defineModel<string>('currency')

watch(value, () => {
  if (value.value === undefined) return
  value.value = Math.abs(truncateToTwoDecimals(value.value))
})
</script>

<template>
  <div :class="cls.ConvertInput">
    <input v-model="value" :class="cls.input" type="number" @input="$emit('updateInput')" />
    <CurrencyDropdown v-model="currency" unstyled />
  </div>
</template>

<style module="cls">
.ConvertInput {
  display: flex;
  border-radius: 8px;
  border: 1px solid #000;
  width: fit-content;
  transition: border-color 300ms;

  overflow: hidden;
  font-size: 16px;
  font-weight: 500;
}

.ConvertInput:hover,
.ConvertInpu:focus-within {
  border-color: var(--c-primary);

  .input {
    border-color: var(--c-primary);
  }
}

.input {
  border: 0;
  outline: 0;
  background-color: unset;
  padding: 4px 8px;
  border-right: 1px solid #000;
  appearance: textfield;
  transition: border-color 300ms;
  font: inherit;

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    appearance: none;
    margin: 0;
  }
}
</style>
