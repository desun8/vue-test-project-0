<template>
  <h1 :class="cls.title">
    <slot></slot>
  </h1>
</template>

<style module="cls">
.title {
  font-weight: 600;
  font-size: 32px;
  margin-bottom: 12px;
}
</style>
