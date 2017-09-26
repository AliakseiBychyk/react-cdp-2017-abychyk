import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { Form, FormGroup, FormControl, ControlLabel, Button } from 'react-bootstrap'
import { setSearchCriterion, setSearchQuery } from '../../actions/query'
import { fetchMovies } from '../../actions/movies'
import styles from './SearchHeader.css'

class SearchHeader extends Component {

  setSearchByTitle = () => {
    this.props.dispatch(setSearchCriterion('title'))
  }

  setSearchByDirector = () => {
    this.props.dispatch(setSearchCriterion('director'))
  }

  setInputValue = (event) => {
    this.props.dispatch(setSearchQuery(encodeURIComponent(event.target.value.trim())))
  }

  onSearchButtonClick = () => {
    this.props.dispatch(fetchMovies(this.props.criterion, this.props.query))
  }

  render() {
    return (
      <div className={styles.searchHeader}>
        
        <Form>          
          <ControlLabel>FIND YOUR MOVIE</ControlLabel>
          <FormControl
            type="text"
            placeholder="Quentin Tarantino"
            onChange={this.setInputValue}
          />
          <div className={styles.searchByButtons}>
            <ControlLabel>SEARCH BY</ControlLabel>
            
            <Button
              onClick={this.setSearchByTitle}
              bsStyle={(this.props.criterion === 'title') ? 'primary' : 'default'}
            >TITLE</Button>
            
            <Button
              onClick={this.setSearchByDirector}
              bsStyle={(this.props.criterion === 'director') ? 'primary' : 'default'}
            >DIRECTOR</Button>          

            <Button
              className={styles.searchButton}
              onClick={this.onSearchButtonClick}
            >
              <Link to={`/search/${this.props.query}`}>SEARCH</Link>
            </Button>
            
          </div>
        </Form>
      </div>
    )
  }  
}

const mapStateToProps = (state) => {
  return {
    criterion: state.query.searchCriterion,
    query: state.query.searchQuery
  }
}

export default connect(mapStateToProps)(SearchHeader)