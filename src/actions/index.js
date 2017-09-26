export const SET_SEARCH_CRITERION = 'SET_SEARCH_CRITERION'
export const SET_SEARCH_VALUE = 'SET_SEARCH_VALUE'
export const FETCH_MOVIES = 'FETCH_MOVIES'

export const setSearchCriterion = (criterion = 'director') => {
  type: 'SET_SEARCH_CRITERION',
  criterion  
}

export const setSearchValue = (value) => {
  type: 'SET_SEARCH_VALUE',
  value  
}

export const fetchMovies = (movies) => {
  type: 'FETCH_MOVIES',
  movies   
}