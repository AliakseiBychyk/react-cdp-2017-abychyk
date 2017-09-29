import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchMovies } from '../../actions/movies'
import MovieItem from '../MovieItem/MovieItem'
import MovieList from '../MovieList/MovieList'
import styles from './MovieDetailPage.css'

class MovieDetailPage extends Component {
  componentWillMount() {
    if (this.props.movies.length === 0) {
      this.props.fetchMovies('title', encodeURIComponent(this.props.title))
    }   
  }

  render() {
    return (
      <div className={styles.detail}>
        {this.props.movie ? <MovieItem
          movie={this.props.movie}
        /> : null}
        <MovieList
          movies={this.props.movies}
        />
      </div>
    )
  }
}

const mapStateToProps = (state, props) => {
  return {
    movies: state.movies,
    movie: state.movies.find((movie) => 
      movie.show_title === props.match.params.show_title
    ),
    title: props.match.params.show_title,
  }
}

export default connect(mapStateToProps, { fetchMovies })(MovieDetailPage)