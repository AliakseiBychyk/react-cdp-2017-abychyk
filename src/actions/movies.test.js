import { fetchMovies } from './movies'
import testingQuery from '../fixtures/testingMovieQuery.json'
import testingOneMovie from '../fixtures/testingOneMovie.json' 

let dispatch 

beforeEach(() => {
  dispatch = jest.fn()
})

test('should setup receive movies action object', async () => {
  await fetchMovies('director', 'James%20Cameron')(dispatch)
  expect(dispatch).toBeCalledWith({
    type: 'RECEIVE_MOVIES',
    movies: testingQuery
  })
})

test('should setup receive one movie action object', async () => {
  await fetchMovies('title', 'Basic%20Instinct')(dispatch)    
  expect(dispatch).toBeCalledWith({
    type: 'RECEIVE_MOVIES',
    movies: [testingOneMovie]
  })
})

test('should setup receive movie with default criterion', async () => {
  await fetchMovies( undefined, 'Basic%20Instinct')(dispatch)
  expect(dispatch).toBeCalledWith({
    type: 'RECEIVE_MOVIES',
    movies: [testingOneMovie]
  })
})