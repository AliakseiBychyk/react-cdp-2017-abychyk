import React from 'react'
import MovieItem from '../MovieItem/MovieItem'
import MovieList from '../MovieList/MovieList'
import styles from './MovieDetailPage.css'

const MovieDetailPage = ({match}) => (
  <div className={styles.detail}>
    <MovieItem match={match} /> 
    <MovieList />
  </div>
)

export default MovieDetailPage