<script setup lang="ts">
import { ref } from 'vue'
import { storeToRefs } from 'pinia'

import { useDeparturesStore } from '@store'

import AppHeader from '@components/app/AppHeader.vue'
import DeparturesTable from '@components/departures/table/DeparturesTable.vue'
import DepartureEditForm from '@components/departures/departure/DepartureEditForm.vue'

const departureStore = useDeparturesStore()

const { selectedDeparture } = storeToRefs(departureStore)

// I would use template refs here for vue 3 but it seems to be incompatible with this version so I'll use an id
const scrollToform = () => {
  const form = document.getElementById('editForm')
  if (form) {
    form.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>

<template>
  <div id="app" class="m-3 flex flex-col md:max-h-screen">
    <AppHeader class="mb-3" />

    <main class="mb-3">
      <DeparturesTable @selectDeparture="scrollToform" />
    </main>

    <aside v-if="selectedDeparture" class="bg-dark">
      <div class="container mx-auto">
        <DepartureEditForm
          :key="selectedDeparture.flightNumber"
          :departure="selectedDeparture"
          id="editForm"
        />
      </div>
    </aside>
  </div>
</template>

<style></style>
