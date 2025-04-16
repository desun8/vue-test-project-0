<script setup lang="ts">
import {
  SelectContent,
  SelectItem,
  SelectPortal,
  SelectRoot,
  SelectTrigger,
  SelectValue,
  SelectViewport,
  SelectItemText,
} from 'reka-ui'
import { CURRENCIES } from '../const'
defineProps<{ unstyled?: boolean }>()

const selectedValue = defineModel<string>()
</script>

<template>
  <SelectRoot v-model="selectedValue">
    <SelectTrigger :class="[cls.field, { unstyled: cls.unstyled }]">
      <SelectValue />
    </SelectTrigger>

    <SelectPortal>
      <SelectContent :class="cls.content" align="end" position="popper">
        <SelectViewport>
          <SelectItem
            v-for="curr in CURRENCIES"
            :key="curr.code"
            :value="curr.code"
            :class="cls.item"
          >
            <span :class="[cls.itemIcon, `icon-${curr.code.toLowerCase()}`]"></span>
            <SelectItemText :class="cls.itemLabel">{{ curr.code }}</SelectItemText>
          </SelectItem>
        </SelectViewport>
      </SelectContent>
    </SelectPortal>
  </SelectRoot>
</template>

<style module="cls">
.field {
  padding: 8px 12px;
  font-size: 16px;
  border: 0;
  background-color: unset;

  > span {
    font-weight: 600;
    color: var(--c-text-primary);
  }
}

.field:not(.unstyled) {
  background-color: #fff;
}

.field:not(:focus-visible) {
  outline: 0;
}

.content {
  background-color: #fff;
  padding: 8px;
  box-shadow: 0 4px 10px 5px rgba(0 0 0 / 10%);
}

.field:not(.unstyled),
.content {
  min-width: 60px;
  border-radius: 6px;
}

.item {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px;
  border-radius: 6px;
  color: var(--c-text-primary);
}

.item[data-highlighted] {
  outline: 0;
}

.item[data-state='checked'],
.item[data-highlighted] {
  background-color: #f3f4f7;
}

.itemIcon {
  flex-shrink: 0;
  display: block;
  width: 28px;
  height: 20px;
}

.itemLabel {
  font-weight: 600;
}
</style>
