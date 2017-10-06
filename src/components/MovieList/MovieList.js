import React, { Component } from 'react'
import PropTypes from 'prop-types'
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

MovieList.propTypes = {
  movies: PropTypes.array,
}

export default MovieList
