import React from 'react'
import { renderToString } from 'react-dom/server'
import { Provider } from 'react-redux'
import { StaticRouter } from 'react-router-dom'
import { matchRoutes, renderRoutes } from 'react-router-config'
import configureStore from './src/store/configureStore'
import App from './src/routes/App'
import HomePage from './src/components/HomePage/HomePage'

const serverRender = (req, res) => {
  // const branch = matchRoutes(routes, )




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

  console.log('initial data', initialData)
  
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