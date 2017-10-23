import React from 'react'
import { renderToString } from 'react-dom/server'
import { Provider } from 'react-redux'
import { StaticRouter } from 'react-router-dom'
import { matchRoutes, renderRoutes } from 'react-router-config'
import configureStore from './src/store/configureStore'
import App from './src/routes/App'
import HomePage from './src/components/HomePage/HomePage'
import routes from './src/routes/routes'
import rootSaga from './src/actions/sagas'

const serverRender = (req, res) => {
  const store = configureStore()
  const context = {} 

  const rootComponent = (
    <Provider store={store}>
      <StaticRouter location={req.url} context={context}>
        {renderRoutes(routes)}
      </StaticRouter>
    </Provider>
  )

  store.runSaga(rootSaga).done.then(() => {
    const initialMarkup = renderToString(rootComponent)
    const initialData = store.getState()  
    res.render('index', {initialMarkup, initialData})
  })

  // Do first render, starts initial actions.
  renderToString(rootComponent)

  // When the first render is finished, send the END action to redux-saga.
  store.close()
}

export default serverRender