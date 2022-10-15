import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'

import DeparturesTable from '../DeparturesTable.vue'

const titles = [
  'Departure Time',
  'City Name',
  'Code',
  'Airline',
  'Gate',
  'Status',
]

describe('DeparturesTable', () => {
  it('Renders a table', () => {
    const wrapper = mount(DeparturesTable)
    expect(wrapper.find('table').exists()).toBe(true)
  })

  it('Renders the specified titles', () => {
    const wrapper = mount(DeparturesTable)
    const tableTitles = wrapper.findAll('th').wrappers.map(w => w.text())
    expect(tableTitles).toEqual(titles)
  })

  it('Renders rows with data fields for each title', () => {
    const wrapper = mount(DeparturesTable)
    const rows = wrapper.findAll('tr').wrappers
    rows.forEach(row => {
      const cells = row.findAll('td').wrappers
      expect(cells.length).toBe(titles.length)
    })
  })
})
