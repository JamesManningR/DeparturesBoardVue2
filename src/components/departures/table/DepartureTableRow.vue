<script setup lang="ts">
import { computed } from 'vue'

import type { Departure } from '@types'

import DepartureStatus from '@components/departures/departure/DepartureStatus.vue'

const props = defineProps<{
  departure: Departure
}>()

/**
 * Formatted time in the format of HH:MM
 */
const formattedtime = computed(() => {
  const time = new Date(props.departure.scheduledDepartureDateTime)

  return time.toLocaleTimeString('en-GB', {
    hour: '2-digit',
    minute: '2-digit',
  })
});
</script>

<template>
  <tr
    @click="$emit('click')"
    title="Select to edit details"
    class="border-light grid-cols-3rounded-lg container mx-auto mb-3 grid rounded-lg border-2 px-10 py-5 font-bold md:grid-cols-10"
  >
    <td class="col-span-3 text-4xl md:col-span-2 md:text-base">
      {{ formattedtime }}
    </td>
    <td class="text-primary md:col-span-2">
      {{ departure.arrivalAirport.cityName }}
    </td>
    <td>{{ departure.arrivalAirport.code }}</td>
    <td class="col-span-3 md:col-span-2">
      {{ departure.airline.name }}
    </td>
    <td class="text-primary">
      <span v-if="departure.departureGate?.number" class="md:hidden">Gate: </span
      >{{ departure.departureGate?.number || '' }}
    </td>
    <td class="col-span-3 md:col-span-2">
      <DepartureStatus :status="departure.status" />
    </td>
  </tr>
</template>

<style lang="scss"></style>