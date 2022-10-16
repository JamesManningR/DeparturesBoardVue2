import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import Axios from 'axios'

import type { Departure, DepartureApiResponse } from '@types'

// If this were more complex, it would be best to split the API interactions into a service file
const departuresApiUrl =
  'https://6315ae3e5b85ba9b11e4cb85.mockapi.io/departures/Flightdata'

export const useDeparturesStore = defineStore('departures', () => {
  /**
   * Holds all departures fetched from the api
   */
  const departures = ref<Departure[]>([])

  /**
   * Sorted departures by scheduled departure time
   * @returns The sorted departures
   */
  const sortedDepartures = computed<Departure[]>(() => {
    return departures.value.sort((a, b) => {
      const aDate = new Date(a.scheduledDepartureDateTime)
      const bDate = new Date(b.scheduledDepartureDateTime)

      return aDate.getTime() - bDate.getTime()
    })
  })

  /**
   * Fetches the departures from the API
   * put them in the store
   * and returns them
   */
  const fetchDepartures = async (): Promise<Departure[]> => {
    let res

    try {
      res = await Axios.get<DepartureApiResponse>(departuresApiUrl)
    } catch (err) {
      throw new Error('Error fetching departures')
    }

    departures.value = res.data.allDepartures
    return departures.value
  }

  /**
   * Selected departure used for editing form
   */
  const selectedDeparture = ref<Departure | null>(null)

  /**
   * Selects a departure from the departures list
   * @param flightNumber The flight number of the departure to select
   * @returns The selected departure or null if not found
   * @throws Error if the departure is not found
   * @throws Error if the departures list is empty
   */
  const selectDeparture = (flightNumber: string): Departure | null => {
    if (departures.value.length === 0)
      throw new Error('Departures list is empty')

    const departure = departures.value.find(
      departure => departure.flightNumber === flightNumber
    )

    if (!departure) throw new Error('Departure not found')

    selectedDeparture.value = departure
    return selectedDeparture.value
  }

  /**
   * Updates a departure in the departures list
   * @param departure The departure to update
   * @returns The updated departure
   * @throws Error if the departure is not found
   */
  const updateDeparture = (departure: Departure): Departure => {
    const index = departures.value.findIndex(
      d => d.flightNumber === departure.flightNumber
    )

    if (index === -1) throw new Error('Departure not found')

    const newDepartures = departures.value
    newDepartures[index] = departure

    departures.value = newDepartures

    return departures.value[index]
  }

  return {
    departures,
    sortedDepartures,
    fetchDepartures,
    selectedDeparture,
    selectDeparture,
    updateDeparture,
  }
})
