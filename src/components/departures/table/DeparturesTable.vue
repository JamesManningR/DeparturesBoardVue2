<script setup lang="ts">
import { onMounted, computed, ref } from 'vue'

import { useDeparturesStore } from '@store'

import AppButton from '@components/app/AppButton.vue'
import DeparturesTableHead from '@/components/departures/table/DeparturesTableHead.vue'
import DepartureTableRow from './DepartureTableRow.vue'

const isLoading = ref(true)
const hasFailed = ref(false)
const departuresStore = useDeparturesStore()
const selectDeparture = (id: string) => departuresStore.selectDeparture(id)

const fetchDepartures = async () => {
  isLoading.value = true

  try {
    await departuresStore.fetchDepartures()
  } catch (err) {
    hasFailed.value = true
    return
  }

  isLoading.value = false
}

onMounted(() => {
  fetchDepartures()
})

const departures = computed(() => departuresStore.sortedDepartures)
</script>

<template>
  <div class="from-dark min-h-2xl bg-gradient-to-r to-black text-white">
    <table v-if="!hasFailed" class="mx-4 flex flex-col pt-3">
      <DeparturesTableHead v-once />
      <tbody v-if="!isLoading">
        <DepartureTableRow
          v-for="departure in departures"
          :key="departure.flightNumber"
          @click="selectDeparture(departure.flightNumber)"
          :departure="departure"
          title="Select to edit details"
          class="hover:bg-dark hover:cursor-pointer"
        />
      </tbody>

      <div v-else class="container mx-auto animate-pulse">
        <div
          v-for="i in 10"
          :key="i"
          class="md:h-17 mb-3 h-52 w-full rounded-lg bg-gray-500"
        ></div>
      </div>
    </table>

    <div v-else class="container mx-auto">
      <div class="flex h-96 flex-col items-center justify-center">
        <h1 class="text-4xl font-bold">Oops!</h1>
        <p class="mb-4 text-2xl">Something went wrong.</p>
        <AppButton @click="fetchDepartures()">Try again</AppButton>
      </div>
    </div>
  </div>
</template>

<style lang="scss"></style>
