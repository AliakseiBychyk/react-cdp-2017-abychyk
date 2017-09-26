export const setSearchCriterion = (searchCriterion = 'director') => ({
  type: 'SET_SEARCH_CRITERION',
  searchCriterion  
})

export const setSearchQuery = (searchQuery) => ({
  type: 'SET_SEARCH_QUERY',
  searchQuery  
})