<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { ROUTES } from '@/const'
import { store } from '@/store'
import { computed } from 'vue'
import CurrencyDropdown from './CurrencyDropdown.vue'

const currency = computed({
  get: () => store.currency,
  set: (value) => {
    store.changeCurrency(value)
  },
})
</script>

<template>
  <header :class="cls.header">
    <div :class="cls.wrapper">
      <nav :class="cls.nav">
        <RouterLink :to="ROUTES.index.path">{{ ROUTES.index.label }}</RouterLink>
        <RouterLink :to="ROUTES.convert.path">{{ ROUTES.convert.label }}</RouterLink>
      </nav>

      <CurrencyDropdown v-model="currency" />
    </div>
  </header>
</template>

<style module="cls">
.header {
  background-color: var(--c-primary);
  margin-bottom: 20px;
}

.wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: var(--page-width);
  margin: 0 auto;
  padding: 16px var(--page-gap);
}

.nav {
  display: flex;
  gap: 16px;
}

.nav a {
  color: #fff;
  transition: all 300ms;
  text-decoration: none;

  &:hover,
  &:focus-visible,
  &:global(.router-link-exact-active) {
    color: #e3e3e3;
  }

  &:global(.router-link-exact-active) {
    text-decoration: underline;
    text-underline-offset: 3px;
  }
}
</style>
