export const SET_SEARCH_CRITERION = 'SET_SEARCH_CRITERION'
export const SET_SEARCH_QUERY = 'SET_SEARCH_QUERY'

export const setSearchCriterion = (searchCriterion = 'director') => ({
  type: SET_SEARCH_CRITERION,
  searchCriterion  
})

export const setSearchQuery = (searchQuery) => ({
  type: SET_SEARCH_QUERY,
  searchQuery  
})