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

test('should setup receive one movie action object', (done) => {
  fetchMovies('title', 'Basic%20Instinct')(dispatch)
    .then(() => {
      expect(dispatch).toBeCalledWith({
        type: 'RECEIVE_MOVIES',
        movies: [testingOneMovie]
      })
      done()
    })
})

test('should setup receive movie with default criterion', (done) => {
  fetchMovies( undefined, 'Basic%20Instinct')(dispatch)
  .then(() => {
    expect(dispatch).toBeCalledWith({
      type: 'RECEIVE_MOVIES',
      movies: [testingOneMovie]
    })
    done()
  })
})