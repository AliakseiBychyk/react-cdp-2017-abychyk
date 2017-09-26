import React, { Component } from 'react'
import SearchHeader from '../SearchHeader/SearchHeader'
import styles from './HomePage.css'

class HomePage extends Component {
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
      <div className={styles.home}>
        <SearchHeader
          onSearchButtonClick={this.fetchMovies}
          onCriterionButtonClick={this.updateSearchCriterion}
          onInputValue={this.onInputValue}
          criterion={this.state.searchCriterion}
        />
      </div>
    )  
  }
}

export default HomePage