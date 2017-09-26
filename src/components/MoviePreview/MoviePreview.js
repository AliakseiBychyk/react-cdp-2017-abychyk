import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import styles from './MoviePreview.css'

class MoviePreview extends Component {
  handleClick = () => {
    console.log(this.props.show_title)
    this.props.onClick(this.props.id)
  }

  render() {
    if (this.props.errorcode) {
      return (
        <div className={styles.error}>
          <div>Error: {this.props.errorcode}</div>  
          {this.props.message}
          <div>Try another search.</div>
        </div>
      )
    }
    return (
      <div
        className={styles.moviePreview}
        onClick={this.handleClick}
      >
        <Link to={`/movie/${this.props.show_title}`}>  
          <img
            src={this.props.poster}
            alt={this.props.show_title}
            className={styles.img} />
        </Link>
      </div>
    )
  }
}

export default MoviePreview