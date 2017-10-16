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
      <Link to={`/movie/${props.title}`}>  
        <img
          src={`https://image.tmdb.org/t/p/w500${props.poster_path}`}
          alt={props.title}
          className={styles.img} />
      </Link>
    </div>
  )
}

MoviePreview.propTypes = {
  onClick: PropTypes.func,
  id: PropTypes.number,
  title: PropTypes.string,
  release_date: PropTypes.string,
  vote_average: PropTypes.number,
  show_cast: PropTypes.string,
  director: PropTypes.string,
  overview: PropTypes.string,
  poster_path: PropTypes.string,
  media_type: PropTypes.string,
}

export default MoviePreview