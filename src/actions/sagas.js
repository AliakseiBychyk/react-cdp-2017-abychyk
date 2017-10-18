import 'fetch-everywhere'
import { api_key } from '../../assets/secret.js'
import { all, call, put, takeEvery } from 'redux-saga/effects'
import { RECEIVE_MOVIES, receiveMovies, fetchMoviesJson } from './movies'

function* fetchMovies(criterion, query) {
  const movies = yield call(fetchMoviesJson, [criterion, query])
  return movies
}

function* watchFetchMovies() {
  yield takeEvery(RECEIVE_MOVIES, fetchMovies)
}

export default function* rootSaga() {
  yield all([
    watchFetchMovies()
  ])
}