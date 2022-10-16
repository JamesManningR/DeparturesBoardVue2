<script setup lang="ts">
defineProps<{
  value: string
}>()

const emit = defineEmits<{
  (e: 'input', value: string): void
}>()

const handleInput = (e: Event) => {
  const target = e.target as HTMLSelectElement
  emit('input', target.value)
}
</script>

<template>
  <input
    type="text"
    class="border-dark rounded-md border-2 p-2"
    :value="value"
    @input="handleInput"
  />
</template>

<style lang="scss"></style>
