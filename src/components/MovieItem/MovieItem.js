import React, { Component } from 'react'
import PropTypes from 'prop-types'
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
          <Button onClick={this.clickBackToSearch}>SEARCH</Button>  
        </div>
        <div className={styles.details}>
          <img
            src={this.props.poster}
            alt={this.props.show_title}
            className={styles.img}
          />
          <div className={styles.text}>
            <div>
              <p3>{this.props.show_title}</p3>
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

MovieItem.propTypes = {
  unit: PropTypes.number,
  show_id: PropTypes.number,
  show_title: PropTypes.string,
  release_year: PropTypes.string,
  rating: PropTypes.string,
  category: PropTypes.string,
  show_cast: PropTypes.string,
  director: PropTypes.string,
  summary: PropTypes.string,
  poster: PropTypes.string,
  mediatype: PropTypes.number,
  runtime: PropTypes.string,
  errorcode: PropTypes.number,
  message: PropTypes.string,
  clickBackToSearch: PropTypes.func.isRequired
}

export default MovieItem