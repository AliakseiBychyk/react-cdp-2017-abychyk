import React, { Component } from 'react'
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

export default MovieDetailPage