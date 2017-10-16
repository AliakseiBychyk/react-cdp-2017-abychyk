import { connect } from 'react-redux'
import { fetchMovies } from '../../actions/movies'
import MovieDetailPage from './MovieDetailPage'

const mapStateToProps = (state, props) => {
  return {
    movies: state.movies,
    movie: state.movies.find(movie => 
      movie.id == props.match.params.id
    )
  }
}

export default connect(mapStateToProps, { fetchMovies })(MovieDetailPage)