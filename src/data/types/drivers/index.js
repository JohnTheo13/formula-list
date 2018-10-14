// @flow

type DriverType = {
  driverId: string,
  permanentNumber: string,
  code: string,
  url: string,
  givenName: string,
  familyName: string,
  dateOfBirth: string,
  nationality: string,
}

type Constructor = {
  constructorId: string,
  url: string,
  name: string,
  nationality: string
}

type DriverShape = {
  position: string,
  positionText: string,
  points: string,
  wins: string,
  id?: string,
  Driver: DriverType,
  Constructors: Array<Constructor>
}

type DriversList = {
  isfetching: boolean,
  fetched: boolean,
  failedFetch: boolean,
  driversList: Array<DriverShape>,
}

export { DriverType, DriverShape, DriversList }
