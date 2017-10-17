import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import moviesReducer from '../reducers/movies'
import queryReducer from '../reducers/query'

const composeEnhancers = typeof window === 'object'
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  : compose

export default (preloadedState = '') => {
  const store = createStore(
    combineReducers({
      movies: moviesReducer,
      query: queryReducer
    }),
    typeof window === 'object' ? preloadedState : {},
    composeEnhancers (
      applyMiddleware(thunk)
    )
  )
  return store
}