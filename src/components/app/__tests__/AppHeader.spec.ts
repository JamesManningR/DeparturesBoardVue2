import { it, describe, expect } from 'vitest'

import { mount } from '@vue/test-utils'

import AppHeader from '../AppHeader.vue'

describe('AppHeader', () => {
  it('Renders a header', () => {
    const wrapper = mount(AppHeader)
    expect(wrapper.find('header').exists()).toBe(true)
  })

  it('Renders a logo as an img or svg', () => {
    const wrapper = mount(AppHeader)
    expect(wrapper.find('img').exists() || wrapper.find('svg').exists()).toBe(
      true
    )
  })

  it('Renders a title of Departures', () => {
    const wrapper = mount(AppHeader)
    expect(wrapper.find('h1').text()).toBe('Departures')
  })
})
