import React, { Component } from 'react'
import PropTypes from 'prop-types'
import MovieItem from '../MovieItem/MovieItem'
import MovieList from '../MovieList/MovieList'
import styles from './MovieDetailPage.css'
import { fetchMovies } from '../../actions/movies'

class MovieDetailPage extends Component {
  static fetchData(store, criterion, query) {
    return store.dispatch(fetchMovies(criterion, query))
  }

  componentWillMount() {
    if (this.props.movies.length === 0) {
      this.props.fetchMovies('movie', this.poros.title)
    }   
  }

  render() {
    console.log(this.props.movie)
    return (
      <div className={styles.detail}>
        <MovieItem
          movie={this.props.movie}
        />
        <MovieList
          onMovieClick={this.onMovieClick} 
          movies={this.props.movies}
        />
      </div>
    )
  }
}

MovieDetailPage.propTypes = {
  movies: PropTypes.array,
  movie: PropTypes.object,
  fetchMovies: PropTypes.func,
}

export default MovieDetailPage