import React, {Component} from 'react'
import MoviePreview from '../MoviePreview/MoviePreview'
import styles from './MovieList.css'

class MovieList extends Component {
  state = {
    movies: this.props.movies
  }

  render() {
    return (
      <div className={styles.movieList}>
      {this.props.movies.map((movie, index) =>
        <MoviePreview
          key={index}
          onClick={this.props.onMovieClick}
          {...movie}
        />
      )}
    </div>
    )
  }
}

export default MovieList
