import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchMovies } from '../../actions/movies'
import SearchHeader from '../SearchHeader/SearchHeader'
import MovieList from '../MovieList/MovieList'
import styles from './SearchResultPage.css'

class SearchResultPage extends Component {
  componentWillMount() {
    this.props.fetchMovies(this.props.criterion, this.props.query)
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.searchQuery !== this.props.query) {
      this.props.fetchMovies( this.props.criterion, this.props.query)
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

const mapStateToProps = (state, props) => {
  return {
    movies: state.movies,
    criterion: new URLSearchParams(props.location.search).get('criterion'),
    query: encodeURIComponent(props.match.params.searchQuery.trim())
  }
}

export default connect(mapStateToProps, { fetchMovies })(SearchResultPage)