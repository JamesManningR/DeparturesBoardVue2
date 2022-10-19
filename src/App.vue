<script setup lang="ts">
import { storeToRefs } from 'pinia'

import { useAppStore, useDeparturesStore } from '@store'

import AppCollapsable from '@components/app/AppCollapsable.vue'
import AppHeader from '@components/app/AppHeader.vue'
import DeparturesTable from '@components/departures/table/DeparturesTable.vue'
import DepartureEditForm from '@components/departures/departure/DepartureEditForm.vue'

const appStore = useAppStore()
const { isEditOpen } = storeToRefs(appStore)

const departureStore = useDeparturesStore()

const { selectedDeparture } = storeToRefs(departureStore)
</script>

<template>
  <div id="app" class="m-3 flex flex-col md:max-h-screen">
    <AppHeader class="mb-3" />

    <main class="mb-3">
      <DeparturesTable />
    </main>

    <div
      class="pb-safe container fixed left-1/2 bottom-0 -translate-x-1/2 transform-gpu px-3"
      v-if="selectedDeparture"
    >
      <button
        @click="isEditOpen = !isEditOpen"
        class="bg-primary w-full rounded-t-lg py-2"
      >
        {{ isEditOpen ? 'Close' : 'Open' }} Edit Menu
      </button>
      <AppCollapsable v-model="isEditOpen">
        <section class="bg-dark">
          <div class="height-0 container mx-auto">
            <DepartureEditForm
              :key="selectedDeparture.flightNumber"
              :departure="selectedDeparture"
              id="editForm"
            />
          </div>
        </section>
      </AppCollapsable>
    </div>
  </div>
</template>

<style></style>
