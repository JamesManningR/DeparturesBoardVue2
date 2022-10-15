import { describe, it, expect, vi } from 'vitest'
import { createTestingPinia } from '@pinia/testing'
import { mount } from '@vue/test-utils'

import { exampleDepartures } from '@/__tests__/testData'

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
  const wrapper = mount(DeparturesTable, {
    global: {
      plugins: [
        createTestingPinia({
          initialState: {
            departures: {
              departures: exampleDepartures,
            },
          },
          createSpy: vi.fn,
        }),
      ],
    },
  })

  it('Renders a table', () => {
    expect(wrapper.find('table').exists()).toBe(true)
  })

  it('Renders the specified titles', () => {
    const tableTitles = wrapper.findAll('th').wrappers.map(w => w.text())
    expect(tableTitles).toEqual(titles)
  })

  it('Renders rows with data fields for each title', () => {
    const tableBody = wrapper.find('tbody')
    const rows = tableBody.findAll('tr').wrappers

    rows.forEach(row => {
      const cells = row.findAll('td').wrappers
      expect(cells.length).toBe(titles.length)
    })
  })
})
