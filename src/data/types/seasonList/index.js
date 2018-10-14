// @ flow

type SeasonType = {
  season: string,
  url?: string,
}

type SeasonShape = {
  isfetching: boolean,
  fetched: boolean,
  failedFetch: boolean,
  list: Array<SeasonType>,
}

export { SeasonType, SeasonShape }
