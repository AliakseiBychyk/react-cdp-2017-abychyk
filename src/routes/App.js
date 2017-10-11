import React from 'react'
import { Route, Switch} from 'react-router-dom'
import HomePage from '../components/HomePage/HomePage'
import SearchResultPage from '../components/SearchResultPage/SearchResultPageContainer'
import MovieDetailPage from '../components/MovieDetailPage/MovieDetailPageContainer'
import NotFoundPage from '../components/NotFoundPage/NotFoundPage'

const App = () => (
  <Switch>  
    <Route exact path="/" component={HomePage} />
    <Route path="/search/:searchQuery" component={SearchResultPage} />
    <Route path="/movie/:show_title" component={MovieDetailPage} />
    <Route component={NotFoundPage} />
  </Switch>
)

export default App