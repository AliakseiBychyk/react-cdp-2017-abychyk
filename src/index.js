import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import configureStore from './store/configureStore'
import AppRouter from './routes/AppRouter'


const preloadedState = window.initialData

delete window.initialData

const store = configureStore(preloadedState)

const jsx = (
  <Provider store={store}>
    <AppRouter />  
  </Provider>  
)

render(jsx, document.getElementById('root'))
