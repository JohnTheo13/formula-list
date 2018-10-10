import { SEASON_CHANGE } from './actionTypes'

const initial = {
  season: 'SEASONS',
  url: undefined
}

const activeSeason = (state = initial, action) => {
  if (action.type === SEASON_CHANGE) {
    return { ...action.payload }
  }
  return state
}

export default activeSeason
