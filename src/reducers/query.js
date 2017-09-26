const queryReducerDefaultState = {
  searchCriterion: 'director',
  query: ''
}

export default (state = queryReducerDefaultState, action) => {
  switch (action.type) {
    case 'SET_SEARCH_CRITERION':
      return { ...state, searchCriterion: action.searchCriterion }
    
    case 'SET_SEARCH_QUERY':
      return { ...state, searchQuery: action.searchQuery }

    default:
      return state
  }
}