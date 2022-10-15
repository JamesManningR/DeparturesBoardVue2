<script setup lang="ts">
import { onMounted, computed, ref } from 'vue'

import { useDeparturesStore } from '@store'
import DepartureStatus from './departure/DepartureStatus.vue'

const isLoading = ref(true)
const hasFailed = ref(false)
const departuresStore = useDeparturesStore()

onMounted(async () => {
  try {
    departuresStore.fetchDepartures()
  } catch (err) {
    hasFailed.value = true
    return
  }

  isLoading.value = false
})

const departures = computed(() => departuresStore.departures)
</script>

<template>
  <div class="from-dark bg-gradient-to-r to-black text-white">
    <table class="flex flex-col pt-3">
      <thead
        class="from-light container mb-3 hidden rounded-md bg-gradient-to-r to-white text-black md:mx-auto md:flex"
      >
        <tr class="grid w-full grid-cols-10 px-10 py-3 text-left text-sm">
          <th class="md:col-span-2">Departure Time</th>
          <th class="md:col-span-2">City Name</th>
          <th>Code</th>
          <th class="md:col-span-2">Airline</th>
          <th>Gate</th>
          <th class="md:col-span-2">Status</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="departure in departures"
          :key="departure.flightNumber"
          title="Select to edit details"
          class="border-light grid-cols-3rounded-lg hover:bg-dark container mx-auto mb-3 grid rounded-lg border-2 px-10 py-5 font-bold hover:cursor-pointer md:grid-cols-10"
        >
          <td class="col-span-3 text-4xl md:col-span-2 md:text-base">
            {{ departure.estimatedDepartureDateTime }}
          </td>
          <td class="text-primary md:col-span-2">
            {{ departure.arrivalAirport.cityName }}
          </td>
          <td>{{ departure.arrivalAirport.code }}</td>
          <td class="col-span-3 md:col-span-2">
            {{ departure.airline.name }}
          </td>
          <td class="text-primary">
            <span class="md:hidden">Gate: </span
            >{{ departure.departureGate?.number || '' }}
          </td>
          <td class="md:col-span-2">
            <DepartureStatus :status="departure.status" />
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style lang="scss"></style>
