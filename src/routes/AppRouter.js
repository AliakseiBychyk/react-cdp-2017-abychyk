import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
import HomePage from '../components/HomePage/HomePage'
import SearchResultPage from '../components/SearchResultPage/SearchResultPageContainer'
import MovieDetailPage from '../components/MovieDetailPage/MovieDetailPageContainer'
import NotFoundPage from '../components/NotFoundPage/NotFoundPage'
import App from './App'

const AppRouter = () => (
  <BrowserRouter>
      <App /> 
  </BrowserRouter>
)

export default AppRouter