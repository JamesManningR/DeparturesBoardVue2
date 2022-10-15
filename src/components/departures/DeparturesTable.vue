<script setup lang="ts"></script>

<template>
  <div class="from-dark bg-gradient-to-r to-black text-white">
    <table class="flex flex-col">
      <thead class="from-light mb-3 flex bg-gradient-to-r to-white text-black">
        <tr class="container mx-auto grid grid-cols-10 text-left">
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
          class="text-bold border-light container mx-auto mb-3 grid grid-cols-10 rounded-lg border-2"
        >
          <td class="md:col-span-2">10:20</td>
          <td class="text-primary md:col-span-2">Los Santos International</td>
          <td>LSI</td>
          <td class="md:col-span-2">Adios Airlines</td>
          <td class="text-primary">A4</td>
          <td class="md:col-span-2">Flight Closing</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style lang="scss"></style>
