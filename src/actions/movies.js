export const RECEIVE_MOVIES = 'RECEIVE_MOVIES'
export const FETCH_MOVIES = 'FETCH_MOVIES'

export const receiveMovies = (movies) => ({
  type: RECEIVE_MOVIES,
  movies  
})

export const fetchMovies = (criterion, query) => ({
  type: FETCH_MOVIES,
  criterion,
  query
})
