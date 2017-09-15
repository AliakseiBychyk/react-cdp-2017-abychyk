import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Form, FormGroup, FormControl, ControlLabel, Button } from 'react-bootstrap'
import styles from './SearchHeader.css'

class SearchHeader extends Component {

  setSearchByTitle = () => {
    this.props.onCriterionButtonClick('title')
  }

  setSearchByDirector = () => {
    this.props.onCriterionButtonClick('director')
  }

  setInputValue = (event) => {
    this.props.onInputValue(event.target.value)
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
              onClick={this.props.onSearchButtonClick}
            >SEARCH</Button>
            
          </div>
        </Form>
      </div>
    )
  }  
}

SearchHeader.propTypes = {
  onSearchButtonClick: PropTypes.func.isRequired,
  onCriterionButtonClick: PropTypes.func,
  onInputValue: PropTypes.func.isRequired,
  criterion: PropTypes.string.isRequired
}

export default SearchHeader