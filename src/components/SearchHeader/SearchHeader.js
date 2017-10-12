import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Redirect } from 'react-router-dom'
import { Form, FormGroup, FormControl, ControlLabel, Button } from 'react-bootstrap'
import styles from './SearchHeader.css'

class SearchHeader extends Component {
  static defaultProps = {
    criterion: 'director',
    query: ''
  }

  constructor(props) {
    super(props)

    this.state = {
      criterion: props.criterion,
      query: decodeURIComponent(props.defaultQuery),
      fireRedirect: false
    }
  }

  setCriterion = () => {
    let criterion = this.state.criterion === 'director'
      ? 'title'
      : 'director'
    this.setState({ criterion })
  }

  setInputValue = (event) => {
    this.setState({ query: encodeURIComponent(event.target.value.trim()) })
  }

  submitForm = (e) => {
    e.preventDefault()
    this.props.redirectTo(`/search/${this.state.query}?criterion=${this.state.criterion}`) 
  }
  
  render() {
    const { fireRedirect } = this.state
    
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
                bsStyle={(this.state.criterion === 'title') ? 'primary' : 'default'}
              >TITLE</Button>
              
              <Button
                onClick={this.setCriterion}
                bsStyle={(this.state.criterion === 'director') ? 'primary' : 'default'}
              >DIRECTOR</Button>          
                
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
  reditectTo: PropTypes.func
}

export default SearchHeader