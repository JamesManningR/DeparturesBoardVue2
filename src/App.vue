<script setup lang="ts">
import AppHeader from '@components/app/AppHeader.vue'
import DeparturesTable from '@components/departures/DeparturesTable.vue'
</script>

<template>
  <div id="app" class="m-3">
    <AppHeader class="mb-3"/>

    <main>
      <DeparturesTable />
    </main>
  </div>
</template>

<style></style>
