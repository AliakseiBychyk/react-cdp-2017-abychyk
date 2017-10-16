import 'fetch-everywhere'
import { api_key } from '../../assets/secret.js'
export const RECEIVE_MOVIES = 'RECEIVE_MOVIES'

const fetchMoviesJson = (criterion, query) => {

  const url = `https://api.themoviedb.org/3/search/${criterion}?api_key=${api_key}&query=${query}`   

  return fetch(url, {
    method: 'GET'
  }).then(resp => resp.json())
    .then(data => {
      return criterion === 'movie'
        ? data.results
        : data.results[0].known_for
    })
    .then(res => {
      return res
    })
    .catch(console.error)
}

const receiveMovies = (movies) => ({
  type: RECEIVE_MOVIES,
  movies  
})

export const fetchMovies = (criterion = 'person', query) => dispatch => fetchMoviesJson(criterion, query)
  .then(movies => dispatch(receiveMovies(movies)))