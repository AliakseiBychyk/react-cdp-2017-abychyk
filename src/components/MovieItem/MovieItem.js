import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import styles from './MovieItem.css'

const MovieItem = (props) => (

  <div className={styles.movieItem}>
    <div className={styles.backToSearchButton}>
      <Link to='/'>  
        <Button>SEARCH</Button> 
      </Link>  
    </div>
    <div className={styles.details}>
      <img
        src={props.movie.poster}
        alt={props.movie.show_title}
        className={styles.img}
      />
      <div className={styles.text}>
        <div>
          <p3 className={styles.title}>{props.movie.show_title}</p3>
          <div>{props.movie.rating}</div>
        </div>
        <div>
          <div>{props.movie.release_year}</div>
          <div>{props.movie.runtime}</div>
        </div>
        <div className={styles.summary}>
          {props.movie.summary}  
        </div>
        <div className={styles.director}>
          Director: {props.movie.director}  
        </div>
        <div className={styles.cast}>
          Cast: {props.movie.show_cast}  
        </div>
      </div>
    </div>
  </div>
)

const mapStateToProps = (state, props) => {
  return {
    movie: state.movies.find((movie) => {
      return movie.show_title === props.match.params.show_title
    })
  }
}

export default connect(mapStateToProps)(MovieItem)