<script setup lang="ts">
import { ref, computed } from 'vue'

import type { Departure } from '@types'
import { StatusTypes } from '@types'
import { useDeparturesStore } from '@store'
import { inferStatusType } from '@utils'

import DepartureStatus from '@components/departures/departure/DepartureStatus.vue'
import AppButton from '@components/app/AppButton.vue'
import AppSelect from '@/components/app/AppSelect.vue'
import AppTextInput from '@/components/app/AppTextInput.vue'

const props = defineProps<{
  departure: Departure
}>()

const options: Record<StatusTypes, string> = {
  [StatusTypes.Departed]: 'Departed',
  [StatusTypes.Delayed]: 'Delayed',
  [StatusTypes.Diverted]: 'Diverted',
  [StatusTypes.Cancelled]: 'Cancelled',
  [StatusTypes.Custom]: 'Free Text...',
}

const selectedStatusType = ref<StatusTypes>(
  inferStatusType(props.departure.status)
)
const customStatus = ref(props.departure.status)

/**
 * The status type is the type of the status, e.g. Departed, Delayed, etc.
 * if free text is selected, the status will reflect the custom status.
 */
const newStatus = computed(() => {
  if (selectedStatusType.value == StatusTypes.Custom) {
    return customStatus.value
  }

  return options[selectedStatusType.value]
})

const departureStore = useDeparturesStore()
const handleSubmit = () => {
  const updatedDeparture = { ...props.departure, status: newStatus.value }

  departureStore.updateDeparture(updatedDeparture)
}
</script>

<template>
  <form @submit.prevent="handleSubmit" class="bg-dark text-white p-4">
    <h2 class="mb-2 text-3xl">
      Editing departure: {{ departure.flightNumber }}
    </h2>

    <section role="presentation" class="mb-4 border-2 border-white rounded-md p-2">
      <h3 class="mb-2 text-xl">Preview</h3>

      <DepartureStatus :status="newStatus" />
    </section>

    <div class="mb-2 flex gap-2">
      <AppSelect v-model.number="selectedStatusType" class="text-black">
        <option v-for="(name, key) in options" :key="key" :value="key">
          {{ name }}
        </option>
      </AppSelect>

      <AppTextInput
        v-show="selectedStatusType === StatusTypes.Custom"
        v-model="customStatus"
        name="CustomText"
        id="CustomText"
        class="text-dark"
      />
    </div>

    <AppButton
      :diabled="
        selectedStatusType === StatusTypes.Custom && customStatus === ''
      "
      type="submit"
      >Update status</AppButton
    >
  </form>
</template>

<style></style>
