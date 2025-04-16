<script setup lang="ts">
import TheHeader from './components/TheHeader.vue'
import TheMain from './components/TheMain.vue'
import ErrorBoundary from './components/ErrorBoundary.vue'
</script>

<template>
  <TheHeader />

  <ErrorBoundary>
    <Suspense>
      <TheMain />

      <template #fallback>
        <p class="wrapper">Загружаем данные...</p>
      </template>
    </Suspense>
  </ErrorBoundary>
</template>
