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
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          className={styles.img}
        />
        <div className={styles.text}>
          <div>
            <h3 className={styles.title}>{movie.title}</h3>
            <div>{movie.vote_average}</div>
          </div>
          <div>
            <div>{movie.release_date}</div>
          </div>
          <div className={styles.summary}>
            {movie.overview}  
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