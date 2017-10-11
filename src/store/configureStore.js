import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import moviesReducer from '../reducers/movies'
import queryReducer from '../reducers/query'

export default (preloadedState = '') => {
  const store = createStore(
    combineReducers({
      movies: moviesReducer,
      query: queryReducer
    }),
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    // preloadedState,
    applyMiddleware(thunk),
    
  )
  return store
}