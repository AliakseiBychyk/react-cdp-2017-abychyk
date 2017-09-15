import React, { Component } from 'react'
import { Link, Route } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import SearchHeader from '../SearchHeader/SearchHeader'
import MovieList from '../MovieList/MovieList'
import MovieItem from '../MovieItem/MovieItem'
import styles from './App.css'

class App extends Component {
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

  setMovie = (id) => {
    this.setState({
      currentMovieId: id
    })
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
      <div className={styles.app}>
        <Route exact path="/" render={() => (
          <SearchHeader
            onSearchButtonClick={this.fetchMovies}
            onCriterionButtonClick={this.updateSearchCriterion}
            onInputValue={this.onInputValue}
            criterion={this.state.searchCriterion}
          />
        )} />
        
        <Route path="/movie" render={() => (
          this.state.currentMovieId
          ? <MovieItem
              clickBackToSearch={this.setMovie}
              {...this.state.movies[this.state.currentMovieId - 1]}
            />
          : <Link to='/'>
              <Button bsStyle='primary'>TO SEARCH</Button>
            </Link>

        )} />
        
        <MovieList
          movies={this.state.movies}
          onMovieClick={this.setMovie}
        />
      </div>
    )
  }
}

export default App