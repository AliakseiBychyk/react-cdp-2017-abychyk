import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import createSagaMiddleware, {END} from 'redux-saga'
import moviesReducer from '../reducers/movies'
import queryReducer from '../reducers/query'
import rootSaga from '../actions/sagas'
 
const composeEnhancers = typeof window === 'object'
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  : compose

const sagaMiddleware = createSagaMiddleware()

export default (preloadedState = '') => {
  const store = createStore(
    combineReducers({
      movies: moviesReducer,
      query: queryReducer
    }),
    typeof window === 'object' ? preloadedState : {},
    composeEnhancers (
      applyMiddleware(sagaMiddleware)
    )
  )
  store.runSaga = sagaMiddleware.run;
  store.close = () => store.dispatch(END);
  sagaMiddleware.run(rootSaga)

  return store
}