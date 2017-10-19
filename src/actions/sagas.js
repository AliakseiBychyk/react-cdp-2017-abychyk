import 'fetch-everywhere'
import { api_key } from '../../assets/secret.js'
import { all, call, put, takeEvery } from 'redux-saga/effects'
import { receiveMovies, FETCH_MOVIES } from './movies'

const fetchMoviesJson = (criterion, query) => { 
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

function* fetchMovies(action) {
  const movies = yield call(fetchMoviesJson, action.criterion, action.query)
  yield put(receiveMovies(movies))
}

function* watchFetchMovies() {
  yield takeEvery(FETCH_MOVIES, fetchMovies)
}

export default function* rootSaga() {
  yield all([
    watchFetchMovies()
  ])
}