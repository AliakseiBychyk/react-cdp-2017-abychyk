import React, { Component } from 'react'
import PropTypes from 'prop-types'
import SearchHeader from '../SearchHeader/SearchHeader'
import MovieList from '../MovieList/MovieList'
import styles from './SearchResultPage.css'
import {fetchMovies} from '../../actions/movies'

class SearchResultPage extends Component {
  static fetchData(store, criterion, query) {
    return store.dispatch(fetchMovies(criterion, query))
  }

  componentWillMount() {
    this.props.fetchMovies(this.props.criterion, this.props.query)
  }

  componentDidUpdate(prevProps) {
    if (prevProps.query !== this.props.query) {
      this.props.fetchMovies( this.props.criterion, this.props.query )
    }
  }

  redirectTo = (url) => {
    this.props.history.push(url)
  }

  render() {
    return (
      <div className={styles.home}>
        <SearchHeader defaultQuery={this.props.query} redirectTo={this.redirectTo}/>
        <MovieList
          movies={this.props.movies}
        />
      </div>
    )
  }
}

SearchResultPage.propTypes = {
  movies: PropTypes.array,
  criterion: PropTypes.string,
  query: PropTypes.string,
  fetchMovies: PropTypes.func,
}

export default SearchResultPage