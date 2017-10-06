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

MoviePreview.propTypes = {
  onClick: PropTypes.func,
  unit: PropTypes.number,
  show_id: PropTypes.number,
  show_title: PropTypes.string,
  releade_year: PropTypes.string,
  rating: PropTypes.string,
  category: PropTypes.string,
  show_cast: PropTypes.string,
  director: PropTypes.string,
  summary: PropTypes.string,
  poster: PropTypes.string,
  mediatype: PropTypes.number,
  runtime: PropTypes.string
}

export default MoviePreview