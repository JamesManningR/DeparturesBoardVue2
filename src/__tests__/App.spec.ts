import { describe, it, expect } from 'vitest'

import { shallowMount } from '@vue/test-utils'

import App from '../App.vue'
import AppHeader from '@components/app/AppHeader.vue'
import DeparturesTable from '@components/departures/DeparturesTable.vue'

describe('App', () => {
  const wrapper = shallowMount(App)

  it('Renders the app header', () => {
    const component = wrapper.findComponent(AppHeader)
    expect(component.exists()).toBe(true)
  })

  it('Renders a table of departures', () => {
    const component = wrapper.findComponent(DeparturesTable)
    expect(component.exists()).toBe(true)
  })
})
