import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import styles from './MovieItem.css'

const MovieItem = ({movie}) => (
  movie 
  ? <div className={styles.movieItem}>
      <div className={styles.backToSearchButton}>
        <Link to='/'>  
          <Button>SEARCH</Button> 
        </Link>  
      </div>
      <div className={styles.details}>
        <img
          src={movie.poster}
          alt={movie.show_title}
          className={styles.img}
        />
        <div className={styles.text}>
          <div>
            <h3 className={styles.title}>{movie.show_title}</h3>
            <div>{movie.rating}</div>
          </div>
          <div>
            <div>{movie.release_year}</div>
            <div>{movie.runtime}</div>
          </div>
          <div className={styles.summary}>
            {movie.summary}  
          </div>
          <div className={styles.director}>
            Director: {movie.director}  
          </div>
          <div className={styles.cast}>
            Cast: {movie.show_cast}  
          </div>
        </div>
      </div>
    </div>
  : null  
)

MovieItem.propTypes = {
  movie: PropTypes.object,
}

export default MovieItem