import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setSearchCriterion, setSearchQuery } from '../../actions/query'
import { fetchMovies } from '../../actions/movies'
import SearchHeader from '../SearchHeader/SearchHeader'
import MovieList from '../MovieList/MovieList'
import styles from './SearchResultPage.css'


class SearchResultPage extends Component {
  state = {
    criterion: new URLSearchParams(this.props.location.search).get('criterion'),
    query: encodeURIComponent(this.props.match.params.searchQuery.trim())
  }

  componentWillMount() {
    this.props.dispatch(fetchMovies(this.state.criterion, this.state.query))
  }

  componentDidUpdate() {
    if (encodeURIComponent(this.props.match.params.searchQuery) !== this.state.query) {
      this.setState({ criterion: new URLSearchParams(this.props.location.search).get('criterion') })
      this.setState({query: encodeURIComponent(this.props.match.params.searchQuery.trim())})
      this.props.dispatch(fetchMovies(
        new URLSearchParams(this.props.location.search).get('criterion'),
        encodeURIComponent(this.props.match.params.searchQuery.trim())
      ))
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

const mapStateToProps = (state) => {
  return {
    movies: state.movies
  }
}

export default connect(mapStateToProps)(SearchResultPage)