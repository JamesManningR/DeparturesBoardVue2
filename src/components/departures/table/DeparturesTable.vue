<script setup lang="ts">
import { onMounted, computed, ref } from 'vue'

import { useDeparturesStore } from '@store'

import DeparturesTableHead from '@/components/departures/table/DeparturesTableHead.vue'
import DepartureTableRow from './DepartureTableRow.vue'

const isLoading = ref(true)
const hasFailed = ref(false)
const departuresStore = useDeparturesStore()
const selectDeparture = (id: string) => departuresStore.selectDeparture(id)

onMounted(async () => {
  try {
    departuresStore.fetchDepartures()
  } catch (err) {
    hasFailed.value = true
    return
  }

  isLoading.value = false
})

const departures = computed(() => departuresStore.sortedDepartures)
</script>

<template>
  <div class="from-dark bg-gradient-to-r to-black text-white">
    <table class="flex flex-col pt-3">
      <DeparturesTableHead v-once />
      <tbody>
        <DepartureTableRow
          v-for="departure in departures"
          :key="departure.flightNumber"
          @click="selectDeparture(departure.flightNumber)"
          :departure="departure"
          title="Select to edit details"
          class="hover:bg-dark hover:cursor-pointer"
        />
      </tbody>
    </table>
  </div>
</template>

<style lang="scss"></style>
