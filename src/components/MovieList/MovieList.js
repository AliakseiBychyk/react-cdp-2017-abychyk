import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import MoviePreview from '../MoviePreview/MoviePreview'
import styles from './MovieList.css'

const MovieList = ({movies, onMovieClick}) => (
  <div className={styles.movieList}>
    {movies.map((movie, index) =>
      <MoviePreview
        key={index}
        onClick={onMovieClick}
        {...movie}
      />
    )}
  </div>
)

const mapStateToProps = (state) => {
  return {
    movies: state.movies
  }
}

export default connect(mapStateToProps)(MovieList)
