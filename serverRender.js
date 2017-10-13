import React from 'react'
import { renderToString } from 'react-dom/server'
import { Provider } from 'react-redux'
import { StaticRouter } from 'react-router-dom'
import { matchRoutes, renderRoutes } from 'react-router-config'
import configureStore from './src/store/configureStore'
import App from './src/routes/App'
import HomePage from './src/components/HomePage/HomePage'
import routes from './src/routes/routes'


const serverRender = (req, res) => {
  const store = configureStore() 

  const branch = matchRoutes(routes, req.url) 

  const promises = branch.map(({route, match}) => {

    // here I have to implement some logic to get criterion and query
    let criterion
    let query = match.params.show_title
    
    let fetchData = route.component.fetchData

    return fetchData instanceof Function 
      ? fetchData(store, criterion='title', query)
      : Promise.resolve(null)
  })
  
  return Promise.all(promises).then(() => {
    const context = {}
    const initialMarkup = renderToString(
      <Provider store={store}>
        <StaticRouter
          location={req.url}
          context={context}
        >
          {renderRoutes(routes)}
        </StaticRouter>
      </Provider>
    )
    const initialData = store.getState()
    
    res.render('index', {initialMarkup, initialData})
  })
}

export default serverRender