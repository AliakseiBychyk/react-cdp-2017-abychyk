import React, { Component } from 'react'
import PropTypes from 'prop-types'
import MovieItem from '../MovieItem/MovieItem'
import MovieList from '../MovieList/MovieList'
import styles from './MovieDetailPage.css'

class MovieDetailPage extends Component {
  componentWillMount() {
    if (this.props.movies.length === 0) {
      this.props.fetchMovies('title', encodeURIComponent(this.props.title))
    }   
  }

  render() {
    return (
      <div className={styles.detail}>
        <MovieItem
          movie={this.props.movie}
        />
        <MovieList
          movies={this.props.movies}
        />
      </div>
    )
  }
}

MovieDetailPage.propTypes = {
  movies: PropTypes.array,
  movie: PropTypes.object,
  title: PropTypes.string,
  fetchMovies: PropTypes.func,
}

export default MovieDetailPage