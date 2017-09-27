import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import styles from './MoviePreview.css'

const MoviePreview = (props) => {
  if (props.errorcode) {
    return (
      <div className={styles.error}>
        <div>Error: {props.errorcode}</div>  
        {props.message}
        <div>Try another search.</div>
      </div>
    )
  }
  return (
    <div className={styles.moviePreview}>
      <Link to={`/movie/${props.show_title}`}>  
        <img
          src={props.poster}
          alt={props.show_title}
          className={styles.img} />
      </Link>
    </div>
  )
}

export default MoviePreview