import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import configureStore from './store/configureStore'
import AppRouter from './routes/AppRouter'

import { fetchMovies } from './actions/movies'
import { setSearchCriterion, setSearchQuery } from './actions/query'

const store = configureStore()

const jsx = (
  <Provider store={store}>
    <AppRouter />  
  </Provider>  
)

render(jsx, document.getElementById('root'))
