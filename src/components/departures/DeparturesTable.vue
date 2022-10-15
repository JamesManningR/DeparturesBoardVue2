<script setup lang="ts"></script>

<template>
  <div class="from-dark bg-gradient-to-r to-black text-white">
    <table class="flex flex-col">
      <thead class="from-light flex bg-gradient-to-r to-white text-black">
        <tr class="container mx-auto grid grid-cols-10">
          <th class="md:col-span-2">Departure Time</th>
          <th class="md:col-span-2">City Name</th>
          <th>Code</th>
          <th class="md:col-span-2">Airline</th>
          <th>Gate</th>
          <th class="md:col-span-2">Status</th>
        </tr>
      </thead>
      <tbody>
        <tr class="container mx-auto grid grid-cols-10">
          <td class="md:col-span-2">10:20</td>
          <td class="md:col-span-2">Los Santos International</td>
          <td>LSI</td>
          <td class="md:col-span-2">Adios Airlines</td>
          <td>A4</td>
          <td class="md:col-span-2">Flight Closing</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style lang="scss"></style>
