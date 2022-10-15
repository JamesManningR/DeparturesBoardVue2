import { describe, it, expect } from 'vitest'

import { StatusTypes } from '@types'

import { inferStatusType } from '../inferStatusTypes'

describe('inferStatusType', () => {
  it("Returns the status 'Departed' if status starts with 'departed'", () => {
    expect(inferStatusType('Departed')).toBe(StatusTypes.Departed)

    expect(inferStatusType('Departed 10:00')).toBe(StatusTypes.Departed)

    expect(inferStatusType('Depot')).not.toBe(StatusTypes.Departed)

    expect(inferStatusType('On Time')).not.toBe(StatusTypes.Departed)
  })

  it("Returns the status 'Diverted' if status starts with 'diverted'", () => {
    expect(inferStatusType('Diverted')).toBe(StatusTypes.Diverted)

    expect(inferStatusType('Diverted 10:00')).toBe(StatusTypes.Diverted)

    expect(inferStatusType('On tarmac')).not.toBe(StatusTypes.Diverted)

    expect(inferStatusType('On Time')).not.toBe(StatusTypes.Diverted)
  })

  it("Returns the status 'Cancelled' if status starts with 'cancelled'", () => {
    expect(inferStatusType('Cancelled')).toBe(StatusTypes.Cancelled)

    expect(inferStatusType('Cancelled 10:00')).toBe(StatusTypes.Cancelled)

    expect(inferStatusType('Cancelled 10:00')).toBe(StatusTypes.Cancelled)

    expect(inferStatusType('On Time')).not.toBe(StatusTypes.Cancelled)
  })

  it("Returns the status 'Delayed' if status starts with 'delayed'", () => {
    expect(inferStatusType('Delayed')).toBe(StatusTypes.Delayed)

    expect(inferStatusType('Delayed 10:00')).toBe(StatusTypes.Delayed)

    expect(inferStatusType('Decomissioned')).not.toBe(StatusTypes.Delayed)

    expect(inferStatusType('On Time')).not.toBe(StatusTypes.Delayed)
  })

  it('Returns the status "Custom" if the status is not one of the above', () => {
    expect(inferStatusType('On Time')).toBe(StatusTypes.Custom)

    expect(inferStatusType('On tarmac')).toBe(StatusTypes.Custom)

    expect(inferStatusType('Departed')).not.toBe(StatusTypes.Custom)

    expect(inferStatusType('Delayed')).not.toBe(StatusTypes.Custom)
  })
})
