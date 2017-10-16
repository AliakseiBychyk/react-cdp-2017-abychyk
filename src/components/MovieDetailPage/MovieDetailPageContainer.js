import { connect } from 'react-redux'
import { fetchMovies } from '../../actions/movies'
import MovieDetailPage from './MovieDetailPage'

const mapStateToProps = (state, props) => {
  return {
    movies: state.movies,
    movie: state.movies.find(movie => 
     movie.title == props.match.params.title
    )
  }
}

export default connect(mapStateToProps, { fetchMovies })(MovieDetailPage)