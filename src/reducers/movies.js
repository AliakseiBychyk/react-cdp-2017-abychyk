import { RECEIVE_MOVIES } from '../actions/movies'

export default (state = [], action) => {
  switch (action.type) {
    
    case RECEIVE_MOVIES:
      return action.movies

    default:
      return state
  }
}