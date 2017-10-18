export const RECEIVE_MOVIES = 'RECEIVE_MOVIES'

export const receiveMovies = (movies) => ({
  type: RECEIVE_MOVIES,
  movies  
})

export const fetchMoviesJson = (criterion, query) => { 
  const url = `https://api.themoviedb.org/3/search/${criterion}?api_key=${api_key}&query=${query}&include_adult=true`   

  return fetch(url, {
    method: 'GET'
  }).then(resp => resp.json())
    .then(data => {
      return criterion === 'movie'
        ? data.results
        : data.results[0].known_for
    })
    .catch(console.error)
}