<script setup lang="ts">
defineProps<{
  value: unknown
}>()

const emit = defineEmits<{
  (e: 'input', value: unknown): void
}>()

const handleChange = (e: Event) => {
  const target = e.target as HTMLSelectElement
  emit('input', target.value)
}
</script>

<template>
  <select
    class="border-dark rounded-md border-2 bg-white p-2"
    :value="value"
    @change="handleChange"
  >
    <slot />
  </select>
</template>

<style lang="scss"></style>
