<script setup lang="ts">
import { computed } from 'vue'

import { inferStatusType } from '@/common/utils'
import { StatusTypes } from '@types'

const props = defineProps<{
  status: string
}>()

const type = computed(() => inferStatusType(props.status))

const typeToBorderColor: Record<StatusTypes, string> = {
  [StatusTypes.Departed]: 'current',
  [StatusTypes.Delayed]: 'current',
  [StatusTypes.Diverted]: 'current',
  [StatusTypes.Cancelled]: 'danger',
  [StatusTypes.Custom]: 'primary',
}

const typeToTextColor: Record<StatusTypes, string> = {
  [StatusTypes.Departed]: 'success',
  [StatusTypes.Delayed]: 'warning',
  [StatusTypes.Diverted]: 'info',
  [StatusTypes.Cancelled]: 'black',
  [StatusTypes.Custom]: 'black',
}

const statusClasses = computed(() => {
  const borderColor = typeToBorderColor[type.value]
  const textColor = typeToTextColor[type.value]

  return `text-${textColor} border-${borderColor}`
})
</script>

<template>
  <div
    :class="statusClasses"
    class="border-l-7 max-w-max rounded-r-full bg-white p-2 pr-10"
  >
    {{ status }}
  </div>
</template>

<style lang="scss"></style>
