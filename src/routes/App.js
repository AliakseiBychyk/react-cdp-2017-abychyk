import React from 'react'
import { Route, Switch} from 'react-router-dom'
import HomePage from '../components/HomePage/HomePage'
import SearchResultPage from '../components/SearchResultPage/SearchResultPageContainer'
import MovieDetailPage from '../components/MovieDetailPage/MovieDetailPageContainer'
import NotFoundPage from '../components/NotFoundPage/NotFoundPage'
import routes from './routes'

const App = () => (
  <Switch>
    {routes.map(route => (
      <Route {...route} />
    ))}
  </Switch>
)

export default App