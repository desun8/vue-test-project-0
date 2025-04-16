<script setup lang="ts">
import { RouterView } from 'vue-router'
import { store } from '@/store'

const { data, error } = await store.fetchCurrencyData()
if (error.value) throw new Error('При загрузке данных произошла ошибка, попробуйте позже.')

store.currencyData = data.value
</script>

<template>
  <main class="wrapper">
    <RouterView />
  </main>
</template>
