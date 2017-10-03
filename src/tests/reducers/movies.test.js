import moviesReducer from '../../reducers/movies'
import movies from '../fixtures/testingMovieQuery.json'

test('should set default state', () => {
  const state = moviesReducer(undefined, { type: '@@INIT' })
  expect(state).toEqual([])
})

test('should receive movies', () => {
  const action = {
    type: 'RECEIVE_MOVIES',
    movies
  }
  const state = moviesReducer(undefined, action)
  expect(state).toEqual(movies)
})
