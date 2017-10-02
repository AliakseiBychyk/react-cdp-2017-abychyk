import 'whatwg-fetch'
export const RECEIVE_MOVIES = 'RECEIVE_MOVIES'

const fetchMoviesJson = (criterion, query) => {
  const url = `https://netflixroulette.net/api/api.php?${criterion}=${query}`
  console.info('url: ', url)
  return fetch(url, {
    method: 'GET'
  }).then(resp => resp.json())
    .then(data => (Array.isArray(data)) ? data : [data])
    .catch(console.error)
}

const receiveMovies = (movies) => ({
  type: RECEIVE_MOVIES,
  movies  
})

export const fetchMovies = (criterion = 'title', query) => dispatch => fetchMoviesJson(criterion, query)
  .then(movies => dispatch(receiveMovies(movies)))