import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
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

  headerContent = () => {
    if (this.props.location.pathname === '/movie') {
      let currentMovie = this.state.currentMovieId && this.state.movies[this.state.currentMovieId - 1]
      console.log(this.state.currentMovieId)
      return ( this.state.currentMovieId
                ? <MovieItem
                    clickBackToSearch={this.setMovie}
                    {...currentMovie}
                  />
                : <Link to='/'>
                    <Button bsStyle='primary'>TO SEARCH</Button>
                  </Link>
      )
    }
    return (
      <SearchHeader
        onSearchButtonClick={this.fetchMovies}
        onCriterionButtonClick={this.updateSearchCriterion}
        onInputValue={this.onInputValue}
        criterion={this.state.searchCriterion}

      />
    )
  }

  render() {
    return (
      <div className={styles.app}>
        
        {this.headerContent()}
        
        <MovieList
          movies={this.state.movies}
          onMovieClick={this.setMovie}
        />
      </div>
    )
  }
}

App.propTypes = {

}
export default App