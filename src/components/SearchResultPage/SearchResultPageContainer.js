import { connect } from 'react-redux'
import { setSearchCriterion, setSearchQuery } from '../../actions/query'
import { fetchMovies } from '../../actions/movies'
import SearchResultPage from './SearchResultPage'
import 'url-search-params-polyfill'

const mapStateToProps = (state, props) => {
  return {
    movies: state.movies,
    criterion: new URLSearchParams(props.location.search).get('criterion'),
    query: encodeURIComponent(props.match.params.searchQuery.trim())
  }
}

export default connect(mapStateToProps, { fetchMovies })(SearchResultPage)