import { describe, it, expect } from 'vitest'

import { mount, shallowMount } from '@vue/test-utils'

import App from '../App.vue'

describe('App', () => {
  it('Renders the app header', () => {
    const wrapper = shallowMount(App)
    wrapper.find('AppHeader')
  })

  it('Renders a table of departures', () => {
    const wrapper = mount(App)
    expect(wrapper.find('table').exists()).toBe(true)
  })
})
