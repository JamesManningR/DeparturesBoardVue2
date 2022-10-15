import { PiniaVuePlugin, createPinia } from 'pinia'
import { describe, it, expect } from 'vitest'
import Vue from 'vue'

import { useDeparturesStore } from '../departures'

Vue.use(PiniaVuePlugin)

const app = new Vue({
  pinia: createPinia(),
})

describe('DeparturesStore', () => {
  describe('State', () => {
    it('Contains a list of departures', () => {
      const store = useDeparturesStore()
      expect(store.departures).toBeDefined()
    })
  })

  describe('Actions', () => {
    it('Has a method for fetching departures', () => {
      const store = useDeparturesStore()
      expect(store.fetchDepartures).toBeDefined()
    })
  })
})
