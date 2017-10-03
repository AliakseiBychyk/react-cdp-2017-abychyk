import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Form, FormGroup, FormControl, ControlLabel, Button } from 'react-bootstrap'
import styles from './SearchHeader.css'

class SearchHeader extends Component {
  state = {
    criterion: 'director',
    query: '',
    fireRedirect: false
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
    this.setState({ fireRedirect: true })
  }

  render() {
    const { fireRedirect } = this.state
    
    return (
      <div className={styles.searchHeader}>
        <Form onSubmit={this.submitForm} >       
            <ControlLabel>FIND YOUR MOVIE</ControlLabel>
            <FormControl
              type="text"
              placeholder="Quentin Tarantino"
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
        {fireRedirect && (
          <Redirect
            to={{
              pathname: `/search/${this.state.query}`,
              search: `?criterion=${this.state.criterion}`
            }}
          />
        )}
      </div>
    )
  }  
}

export default SearchHeader