import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Form, FormGroup, FormControl, ControlLabel, Button } from 'react-bootstrap'
import styles from './SearchHeader.css'

class SearchHeader extends Component {
  state = {
    criterion: 'director',
    query: ''
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
              onClick={this.setCriterion}
              bsStyle={(this.state.criterion === 'title') ? 'primary' : 'default'}
            >TITLE</Button>
            
            <Button
              onClick={this.setCriterion}
              bsStyle={(this.state.criterion === 'director') ? 'primary' : 'default'}
            >DIRECTOR</Button>          

            <Link
              to={{
                pathname: `/search/${this.state.query}`,
                search: `?criterion=${this.state.criterion}`
              }}
            ><Button className={styles.searchButton}>
                SEARCH
              </Button>
            </Link>
                   
          </div>
        </Form>
      </div>
    )
  }  
}

export default SearchHeader