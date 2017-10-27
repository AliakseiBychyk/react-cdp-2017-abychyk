import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Redirect } from 'react-router-dom'
import { Form, FormGroup, FormControl, ControlLabel, Button } from 'react-bootstrap'
import styles from './SearchHeader.css'

class SearchHeader extends Component {
  static defaultProps = {
    criterion: 'person',
    query: ''
  }

  constructor(props) {
    super(props)

    this.state = {
      criterion: props.criterion,
      query: props.defaultQuery,
    }
  }

  setCriterion = () => {
    let criterion = this.state.criterion === 'person'
      ? 'movie'
      : 'person'
    this.setState({ criterion })
  }

  setInputValue = (event) => {
    this.setState({ query: event.target.value })
  }

  submitForm = (event) => {
    event.preventDefault()
    this.props.redirectTo(`/search/${this.state.query}?criterion=${this.state.criterion}`) 
  }
  
  render() {
    
    return (
      <div className={styles.searchHeader}>
        <Form onSubmit={this.submitForm} >       
            <ControlLabel>FIND YOUR MOVIE</ControlLabel>
            <FormControl
              type="text"
              name="title"
              placeholder="Quentin Tarantino"
              defaultValue={this.state.query}
              onChange={this.setInputValue}
            />
            <div className={styles.searchByButtons}>
              <ControlLabel>SEARCH BY</ControlLabel>
              
              <Button
                onClick={this.setCriterion}
                bsStyle={(this.state.criterion === 'movie') ? 'primary' : 'default'}
              >MOVIE</Button>
              
              <Button
                onClick={this.setCriterion}
                bsStyle={(this.state.criterion === 'person') ? 'primary' : 'default'}
              >PERSON</Button>          
                
              <Button
                type="submit"
                className={styles.searchButton}
              >SEARCH</Button>
            </div>
        </Form>  
      </div>
    )
  }  
}

SearchHeader.propTypes = {
  criterion: PropTypes.string,
  redirectTo: PropTypes.func
}

export default SearchHeader