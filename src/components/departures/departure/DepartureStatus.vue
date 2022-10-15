<script setup lang="ts">
import { computed } from 'vue'

import { inferStatusType } from '@/common/utils';

const props = defineProps<{
  status: string
}>()

const type = computed(() => inferStatusType(props.status))
</script>

<template>
  <span>{{ status }}</span>
</template>

<style lang="scss"></style>