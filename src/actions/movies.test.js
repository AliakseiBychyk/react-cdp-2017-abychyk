import { fetchMovies } from './movies'
import testingMovieQuery from '../fixtures/testingMovieQuery.json'
import testingPersonMovie from '../fixtures/testingPersonQuery.json' 

let dispatch 

beforeEach(() => {
  dispatch = jest.fn()
})

test('should setup receive movies action object', async () => {
  await fetchMovies('person', 'Quentin%20Tarantino')(dispatch)
  expect(dispatch).toBeCalledWith({
    type: 'RECEIVE_MOVIES',
    movies: testingMovieQuery.results[0].known_for
  })
})

test('should setup receive one movie action object', async () => {
  await fetchMovies('movie', 'Basic%20Instinct')(dispatch)    
  expect(dispatch).toBeCalledWith({
    type: 'RECEIVE_MOVIES',
    movies: testingPersonMovie.results
  })
})

test('should setup receive movie with default criterion', async () => {
  await fetchMovies( undefined, 'Quentin%20Tarantino')(dispatch)
  expect(dispatch).toBeCalledWith({
    type: 'RECEIVE_MOVIES',
    movies: testingPersonMovie.results[0].known_for
  })
})