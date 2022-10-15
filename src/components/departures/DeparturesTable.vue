<script setup lang="ts"></script>

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
          class="border-light container mx-auto mb-3 grid grid-cols-3rounded-lg border-2 px-10 py-5 font-bold md:grid-cols-10"
        >
          <td class="text-4xl col-span-3">10:20</td>
          <td class="text-primary md:col-span-2">Los Santos</td>
          <td>LSI</td>
          <td class="col-span-3 md:col-span-2">Adios Airlines</td>
          <td class="text-primary"><span class="md:hidden">Gate: </span>A4</td>
          <td class="md:col-span-2">Flight Closing</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style lang="scss"></style>
