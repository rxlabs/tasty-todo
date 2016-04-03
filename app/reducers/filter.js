import { SET_FILTER } from '../constants/ActionTypes'
import { ALL } from '../constants/Filters'

const initialState = ALL

const filter = (state = initialState, action) => {
  switch (action.type) {
    case SET_FILTER:
      return action.filter
    default:
      return state
  }
}

export default filter
