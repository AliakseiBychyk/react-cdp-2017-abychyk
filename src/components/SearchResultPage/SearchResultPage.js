import React, { Component } from 'react'
import SearchHeader from '../SearchHeader/SearchHeader'
import MovieList from '../MovieList/MovieList'
import styles from './SearchResultPage.css'

class SearchResultPage extends Component {
  componentWillMount() {
    this.props.fetchMovies(this.props.criterion, this.props.query)
  }

  componentDidUpdate(prevProps) {
    if (prevProps.query !== this.props.query) {
      this.props.fetchMovies( this.props.criterion, this.props.query )
    }
  }

  render() {
    return (
      <div className={styles.home}>
        <SearchHeader />
        <MovieList
          movies={this.props.movies}
        />
      </div>
    )
  }
}

export default SearchResultPage