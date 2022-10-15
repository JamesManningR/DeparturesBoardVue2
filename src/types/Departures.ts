export interface DepartureApiResponse {
  allDepartures: Departure[]
}

export interface Departure {
  flightDirection: FlightDirections
  scheduledDepartureDateTime: string
  scheduledArrivalDateTime: string
  estimatedDepartureDateTime: string | null
  actualDepartureDateTime: string | null
  arrivalAirport: Airport
  departureAirport: Airport
  flightNumber: string
  airline: Airline
  departureGate?: DepartureGate | null
  arrivalTerminal: null
  departureTerminal: string
  status: string
}

export interface Airline {
  name: string
  code: string
}

export interface Airport {
  name: string
  cityName: string
  countryName: string
  code: string
}

export interface DepartureGate {
  name: string
  number: string
  action: string
}

export enum FlightDirections {
  Departure = 'departure',
  Arrival = 'arrival', // This is assumed since there are no arrivals in the API
}

export enum StatusTypes {
  Custom,
  Departed,
  Diverted,
  Delayed,
  Cancelled,
}
