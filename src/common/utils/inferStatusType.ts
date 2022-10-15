import { StatusTypes } from '@types'

export const inferStatusType = (status: string): StatusTypes => {
  const lowercasedStatus = status.toLowerCase()

  if (lowercasedStatus.startsWith('departed')) return StatusTypes.Departed

  if (lowercasedStatus.startsWith('diverted')) return StatusTypes.Diverted

  if (lowercasedStatus.startsWith('cancelled')) return StatusTypes.Cancelled

  if (lowercasedStatus.startsWith('delayed')) return StatusTypes.Delayed

  return StatusTypes.Custom
}
