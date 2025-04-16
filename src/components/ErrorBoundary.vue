<script setup lang="ts">
import { type ComponentPublicInstance, onErrorCaptured, ref } from 'vue'

const hasErr = ref(false)
const errMsg = ref('')

onErrorCaptured((err: Error, instance: ComponentPublicInstance | null, info: string) => {
  console.error('Error captured:', err, '\n\n', instance, '\n\n', 'info: ', info)
  hasErr.value = true
  errMsg.value = err.message || 'Unknown error'

  return false
})
</script>

<template>
  <p v-if="hasErr" class="wrapper">{{ errMsg }}</p>
  <slot v-else></slot>
</template>
