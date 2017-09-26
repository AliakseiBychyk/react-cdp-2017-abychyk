import React, { Component } from 'react'
import SearchHeader from '../SearchHeader/SearchHeader'
import MovieList from '../MovieList/MovieList'
import styles from './SearchResultPage.css'

class SearchResultPage extends Component {
  state = {
    movies: [],
    searchCriterion: 'director',
    searchValue: '',
    currentMovieId: null
  }

  fetchMovies = () => {
    let { searchCriterion, searchValue } = this.state
    const url = `https://netflixroulette.net/api/api.php?${searchCriterion}=${searchValue}`
    console.log('state on search: ', this.state, ' ,url: ', url)

    fetch(url, {
      method: 'GET'
    }).then(resp => resp.json())
      .then(data => this.setState({
        movies: (Array.isArray(data)) ? data : [data]
      }))
      .catch(console.error)
  }

  onInputValue = (value) => {
    let updatedValue = encodeURIComponent(value.trim())
    this.setState({
      searchValue: updatedValue
    })
  }

  updateSearchCriterion = (searchBy) => {
    this.setState({
      searchCriterion: searchBy
    })
  }

  render() {
    return (
      <div className={styles.srp}>
        <SearchHeader
          onSearchButtonClick={this.fetchMovies}
          onCriterionButtonClick={this.updateSearchCriterion}
          onInputValue={this.onInputValue}
          criterion={this.state.searchCriterion}
        />
        <MovieList
          movies={this.state.movies}
        />
        </div>
    )  
  }
}

export default SearchResultPage