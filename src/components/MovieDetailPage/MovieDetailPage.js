import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchMovies } from '../../actions/movies'
import MovieItem from '../MovieItem/MovieItem'
import MovieList from '../MovieList/MovieList'
import styles from './MovieDetailPage.css'

class MovieDetailPage extends Component {
  // state = {
  //   show_title: this.props.match.params.show_title,
  //   query: encodeURIComponent(this.props.match.params.show_title)
  // }

  componentWillMount() {
    console.log(this.state.show_title)
    console.log(this.props.movies)
    if (this.props.movies.length === 0) {
      this.props.dispatch(fetchMovies('title', encodeURIComponent(this.props.title)))
    }
    console.log(this.props.movies)
  }

  // componentDidUpdate(prevProps) {
  //   if (prevProps.match.params.show_title !== this.props.title) {
  //     this.setState({ show_title: this.props.title })
  //     console.log('update', this.state.show_title)
  //   }
  // // }

  // getMovie = () => {
  //   return this.props.movies.find((movie) => 
  //     movie.show_title === this.state.show_title
  //   )
  // }

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

export default connect(mapStateToProps)(MovieDetailPage)