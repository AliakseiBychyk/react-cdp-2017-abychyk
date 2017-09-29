import { connect } from 'react-redux'
import { fetchMovies } from '../../actions/movies'
import MovieDetailPage from './MovieDetailPage'

const mapStateToProps = (state, props) => {
  return {
    movies: state.movies,
    movie: state.movies.find((movie) => 
      movie.show_title === props.match.params.show_title
    ),
    title: props.match.params.show_title,
  }
}

export default connect(mapStateToProps, { fetchMovies })(MovieDetailPage)