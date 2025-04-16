<script setup lang="ts">
import { toLocaleMoney } from '@/utils/toLocaleMoney'
import { CURRENCIES_CODE } from '@/const'
import { store } from '@/store'
import { computed } from 'vue'

interface CurrencyCardProps {
  currencyType: (typeof CURRENCIES_CODE)[keyof typeof CURRENCIES_CODE]
  title: string
  value: number
}
const { currencyType } = defineProps<CurrencyCardProps>()
const currentCurrency = computed(() => store.currency)
const iconClass = `icon-${currencyType.toLowerCase()}`
</script>

<template>
  <article :class="cls.card">
    <span :class="[cls.icon, iconClass]"></span>
    <h2 :class="cls.label">{{ title }}</h2>
    <span :class="cls.value">{{ toLocaleMoney(value, currentCurrency) }}</span>
  </article>
</template>

<style module="cls">
.card {
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-areas: 'icon label' 'empty value';
  align-items: center;
  gap: 12px 26px;
  padding: 24px 32px;
  font-size: 20px;
  border-radius: 12px;
  border: 1px solid rgba(0 0 0 / 10%);
  box-shadow:
    0 1px 2px rgba(0 0 0 / 5%),
    0 2px 12px rgba(0 0 0/ 8%);
}

.icon {
  grid-area: icon;
  display: block;
  width: 48px;
  height: 32px;
}

.label {
  grid-area: label;
  font-weight: 500;
}

.value {
  grid-area: value;
  font-weight: 650;
  font-size: 32px;
}
</style>
