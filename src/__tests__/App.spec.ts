import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'

import App from '../App.vue'

describe('App', () => {
  it('Renders a header with an icon and the text departures', () => {
    const wrapper = mount(App)
    expect(wrapper.find('header').exists()).toBe(true)
    expect(wrapper.find('header').find('svg').exists()).toBe(true)
    expect(wrapper.find('header').find('h1').text()).toBe('Departures')
  })

  it('Renders a table of departures', () => {
    const wrapper = mount(App)
    expect(wrapper.find('table').exists()).toBe(true)
  })
})
