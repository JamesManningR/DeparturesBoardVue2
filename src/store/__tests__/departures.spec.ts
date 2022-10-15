import { PiniaVuePlugin, createPinia } from 'pinia'
import { describe, it, expect, beforeEach } from 'vitest'
import Vue from 'vue'

import { useDeparturesStore } from '../departures'
import { exampleDepartures, exampleDeparture } from '@/__tests__/testData'

Vue.use(PiniaVuePlugin)

new Vue({
  pinia: createPinia(),
})

describe('DeparturesStore', () => {
  describe('Departures', () => {
    it('Contains a list of departures', () => {
      const store = useDeparturesStore()
      expect(store.departures).toBeDefined()
    })

    it('Has a method for fetching departures', () => {
      const store = useDeparturesStore()
      expect(store.fetchDepartures).toBeDefined()
    })
  })

  describe('Selected departure', () => {
    let store

    beforeEach(() => {
      store = useDeparturesStore()
      store.departures = exampleDepartures
    })

    it('Contains a selected departure', () => {
      const store = useDeparturesStore()
      expect(store.selectedDeparture).toBeDefined()
    })

    it('Has a method for selecting a departure', () => {
      const store = useDeparturesStore()
      expect(store.selectDeparture).toBeDefined()
    })

    it('When selecing a departure, if the departure is in the departures the selected departure is set', () => {
      const store = useDeparturesStore()
      store.selectDeparture(exampleDeparture.flightNumber)

      expect(store.selectedDeparture).toEqual(exampleDeparture)
    })

    it('When selecing a departure, if the departure is not in the departures throw an error', () => {
      const store = useDeparturesStore()
      expect(() => store.selectDeparture('not a flight number')).toThrowError()
    })
  })

  describe('Updating a departure', () => {
    let store

    beforeEach(() => {
      store = useDeparturesStore()
      store.departures = exampleDepartures
    })

    it('Has a method for updating a departure', () => {
      const store = useDeparturesStore()
      expect(store.updateDeparture).toBeDefined()
    })

    it('When updating a departure, if the departure is in the departures the departure is updated', () => {
      const store = useDeparturesStore()
      store.departures = exampleDepartures
      const updatedDeparture = { ...exampleDeparture, status: 'Example text' }
      store.updateDeparture(updatedDeparture)

      expect(store.departures).toContainEqual(updatedDeparture)
    })

    it('When updating a departure, if the departure is not in the departures throw an error', () => {
      const store = useDeparturesStore()
      store.departures = exampleDepartures
      const updatedDeparture = {
        ...exampleDeparture,
        flightNumber: 'not a flight number',
        status: 'Example text',
      }
      expect(() => store.updateDeparture(updatedDeparture)).toThrowError()
    })
  })
})
