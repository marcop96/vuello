<script setup lang="ts">
import { computed } from 'vue'
import type { TagName } from '@/types'

const props = defineProps<{
  tag: TagName
}>()

const background = computed(() => {
  switch (props.tag) {
    case 'Work':
      return 'bg-blue-500'
    case 'Personal':
      return 'bg-green-500'
    case 'Shopping':
      return 'bg-yellow-500'
    case 'Health':
      return 'bg-red-500'
    default:
      return 'bg-gray-500'
  }
})
</script>

<template>
  <div :class="background">
    {{ tag }}
  </div>
</template>
