import React, { Component } from 'react'
import PropTypes from 'prop-types'
import MoviePreview from '../MoviePreview/MoviePreview'
import styles from './MovieList.css'

class MovieList extends Component {

  render() {
    return (
      <div className={styles.movieList}>
      {this.props.movies.map(movie =>
        <MoviePreview
          key={movie.id}
          {...movie}
        />
      )}
    </div>
    )
  }
}

MovieList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object),
}

export default MovieList
