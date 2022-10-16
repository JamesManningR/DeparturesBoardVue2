<script setup lang="ts">
defineEmits<{
  (e: 'click'): void
  (e: 'select'): void
}>()
</script>

<template>
  <button
    @click="$emit('click')"
    @select="$emit('select')"
    class="bg-primary hover:bg-primary-dark text-dark rounded-md px-4 py-2 shadow-md hover:shadow-lg"
  >
    <slot />
  </button>
</template>

<style lang="scss"></style>
