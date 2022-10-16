import { describe, it, expect } from 'vitest'
import { StatusTypes } from '@types'

import { mount } from '@vue/test-utils'

import DepartureStatus from '../DepartureStatus.vue'

describe('DepartureStatus', () => {
  it('Renders the specified status as text', () => {
    const wrapper = mount(DepartureStatus, {
      propsData: {
        status: 'On Time',
      },
    })
    expect(wrapper.text()).contains('On Time')
  })

  describe('StatusType', () => {
    it('Has a computed type for the status type', () => {
      const wrapper = mount(DepartureStatus, {
        propsData: {
          status: 'On Time',
        },
      })
      expect(wrapper.vm.type).toBeDefined()
    })

    it('Resolves the status type to Departed if status starts with departed', () => {
      const wrapper = mount(DepartureStatus, {
        propsData: {
          status: 'Departed',
        },
      })
      expect(wrapper.vm.type).toBe(StatusTypes.Departed)

      wrapper.setProps({
        status: 'Departed 10:00',
      })
      expect(wrapper.vm.type).toBe(StatusTypes.Departed)

      wrapper.setProps({
        status: 'Depot',
      })
      expect(wrapper.vm.type).not.toBe(StatusTypes.Departed)

      wrapper.setProps({
        status: 'On Time',
      })
      expect(wrapper.vm.type).not.toBe(StatusTypes.Departed)
    })

    it('Resolves the status type to Diverted if status starts with diverted', () => {
      const wrapper = mount(DepartureStatus, {
        propsData: {
          status: 'Diverted',
        },
      })
      expect(wrapper.vm.type).toBe(StatusTypes.Diverted)

      wrapper.setProps({
        status: 'Diverted 10:00',
      })
      expect(wrapper.vm.type).toBe(StatusTypes.Diverted)

      wrapper.setProps({
        status: 'On tarmac',
      })
      expect(wrapper.vm.type).not.toBe(StatusTypes.Diverted)

      wrapper.setProps({
        status: 'On Time',
      })
      expect(wrapper.vm.type).not.toBe(StatusTypes.Diverted)
    })

    it('Resolves the status type to Delayed if status starts with delayed', () => {
      const wrapper = mount(DepartureStatus, {
        propsData: {
          status: 'Delayed',
        },
      })
      expect(wrapper.vm.type).toBe(StatusTypes.Delayed)

      wrapper.setProps({
        status: 'Delayed 10:00',
      })
      expect(wrapper.vm.type).toBe(StatusTypes.Delayed)

      wrapper.setProps({
        status: 'Decomissioned',
      })
      expect(wrapper.vm.type).not.toBe(StatusTypes.Delayed)

      wrapper.setProps({
        status: 'On Time',
      })
      expect(wrapper.vm.type).not.toBe(StatusTypes.Delayed)
    })

    it('Resolves the status type to Cancelled if the status starts with cancelled', () => {
      const wrapper = mount(DepartureStatus, {
        propsData: {
          status: 'Cancelled',
        },
      })
      expect(wrapper.vm.type).toBe(StatusTypes.Cancelled)

      wrapper.setProps({
        status: 'Cancelled 10:00',
      })
      expect(wrapper.vm.type).toBe(StatusTypes.Cancelled)

      wrapper.setProps({
        status: 'On Time',
      })
      expect(wrapper.vm.type).not.toBe(StatusTypes.Cancelled)
    })

    it('Resolves the status type to Custom if the status doesn\'t match another condition', () => {
      const wrapper = mount(DepartureStatus, {
        propsData: {
          status: 'On Time',
        },
      })
      expect(wrapper.vm.type).toBe(StatusTypes.Custom)

      wrapper.setProps({
        status: 'On tarmac',
      })
      expect(wrapper.vm.type).toBe(StatusTypes.Custom)

      wrapper.setProps({
        status: 'Departed',
      })
      expect(wrapper.vm.type).not.toBe(StatusTypes.Custom)
    })
  })
})
