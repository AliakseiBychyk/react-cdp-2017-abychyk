import HomePage from '../components/HomePage/HomePage'
import SearchResultPage from '../components/SearchResultPage/SearchResultPageContainer'
import MovieDetailPage from '../components/MovieDetailPage/MovieDetailPageContainer'
import NotFoundPage from '../components/NotFoundPage/NotFoundPage'

const routes = [
  {
    path: '/',
    exact: true,
    component: HomePage,
  },
  {
    path: '/search/:searchQuery',
    component: SearchResultPage
  },
  {
    path: '/movie/:title',
    component: MovieDetailPage
  },
  {
    component: NotFoundPage
  }
]

export default routes