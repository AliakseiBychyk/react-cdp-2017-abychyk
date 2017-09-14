import React from 'react'
import PropTypes from 'prop-types'
import MoviePreview from '../MoviePreview/MoviePreview'
import styles from './MovieList.css'

const MovieList = ({movies, onMovieClick}) => (
  <div className={styles.movieList}>
    {movies.map((movie, index) =>
      <MoviePreview
        key={index}
        id={index + 1}
        onClick={onMovieClick}
        {...movie}
      />
    )}
  </div>
)

MovieList.propTypes = {
  movies: PropTypes.array,
  onMovieClick: PropTypes.func,
}

export default MovieList
