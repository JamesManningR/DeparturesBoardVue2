import { defineStore } from 'pinia'
import { ref } from 'vue'
import Axios from 'axios'

import type { Departure, DepartureApiResponse } from '@types'

// If this were more complex, it would be best to split the API interactions into a service file
const departuresApiUrl =
  'https://6315ae3e5b85ba9b11e4cb85.mockapi.io/departures/Flightdata'

export const useDeparturesStore = defineStore('departures', () => {
  const departures = ref<Departure[]>([])

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

  return {
    departures,
    fetchDepartures,
  }
})
