import React from 'react'
import { renderToString } from 'react-dom/server'
import { Provider } from 'react-redux'
import configureStore from './src/store/configureStore'
import AppRouter from './src/routes/AppRouter'
import HomePage from './src/components/HomePage/HomePage'

const serverRender = () => {

  const store = configureStore()

  const initialData = store.getState()
  
  console.log('in serverRender initialData:', initialData)

  return new Promise((resolve, reject) => {
    const res = ({
      initialMarkup: renderToString(
        <Provider store={store}>
          <HomePage />
        </Provider>
      ),
      initialData
    })
    resolve(res)
  })
}

export default serverRender