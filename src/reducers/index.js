export default (state = [], action) => {
  switch (action.type) {
    case 'SET_SEARCH_CRITERION':
      return [...state, action.criterion]  
    
    case 'SET_SEARCH_VALUE':
      return [...state, action.value]  
    
    case 'FETCH_MOVIES':
      return action.movies    

    default:
      return state  
}