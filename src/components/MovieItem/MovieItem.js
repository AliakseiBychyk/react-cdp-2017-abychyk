import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import styles from './MovieItem.css'

class MovieItem extends Component {

  clickBackToSearch = () => {
    this.props.clickBackToSearch(null)
  }

  render() {
    return (
      <div className={styles.movieItem}>
        <div className={styles.backToSearchButton}>
          <Link to='/'>  
            <Button onClick={this.clickBackToSearch}>SEARCH</Button> 
          </Link>  
        </div>
        <div className={styles.details}>
          <img
            src={this.props.poster}
            alt={this.props.show_title}
            className={styles.img}
          />
          <div className={styles.text}>
            <div>
              <p3 className={styles.title}>{this.props.show_title}</p3>
              <div>{this.props.rating}</div>
            </div>
            <div>
              <div>{this.props.release_year}</div>
              <div>{this.props.runtime}</div>
            </div>
            <div className={styles.summary}>
              {this.props.summary}  
            </div>
            <div className={styles.director}>
              Director: {this.props.director}  
            </div>
            <div className={styles.cast}>
              Cast: {this.props.show_cast}  
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default MovieItem