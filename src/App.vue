<script setup lang="ts">
import { computed } from 'vue'

import { useDeparturesStore } from '@store'

import AppHeader from '@components/app/AppHeader.vue'
import DeparturesTable from '@components/departures/table/DeparturesTable.vue'
import DepartureEditForm from '@components/departures/departure/DepartureEditForm.vue'

const departureStore = useDeparturesStore()

const selectedDeparture = computed(() => departureStore.selectedDeparture)
</script>

<template>
  <div id="app" class="m-3">
    <AppHeader class="mb-3" />

    <main class="mb-3">
      <DeparturesTable />
    </main>

    <aside v-if="selectedDeparture" class="bg-dark">
      <div class="container mx-auto">
        <DepartureEditForm
          :key="selectedDeparture.flightNumber"
          :departure="selectedDeparture"
        />
      </div>
    </aside>
  </div>
</template>

<style></style>
