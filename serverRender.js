import React from 'react'
import { renderToString } from 'react-dom/server'
import { Provider } from 'react-redux'
import { StaticRouter } from 'react-router-dom'
import configureStore from './src/store/configureStore'
import App from './src/routes/App'
import HomePage from './src/components/HomePage/HomePage'

const serverRender = (req, res) => {

  const context = {}
  const store = configureStore()

  const initialMarkup = renderToString(
    <Provider store={store}>
      <StaticRouter
        location={req.url}
        context={context}
      >
        <App />
      </StaticRouter>
    </Provider>
  )
  const initialData = store.getState()
  
  if (context.url) {
    res.writeHead(301, {
      Location: context.url
    })
    res.end()
  } else {
    res.render('index', {initialMarkup, initialData})
    res.end()
  }
}

export default serverRender