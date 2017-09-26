import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import HomePage from '../components/HomePage/HomePage'
import SearchResultPage from '../components/SearchResultPage/SearchResultPage'
import MovieDetailPage from '../components/MovieDetailPage/MovieDetailPage'
import NotFoundPage from '../components/NotFoundPage/NotFoundPage'

const AppRouter = () => (
  <Router>
    <Switch>  
      <Route exact path="/" component={HomePage} />
      <Route path="/search/:searchQuery" component={SearchResultPage} />
      <Route path="/film/:show_title" component={MovieDetailPage} />
      <Route component={NotFoundPage} />
    </Switch>  
  </Router>
)

export default AppRouter