import { fetchMovies } from '../../actions/movies'
import testingQuery from '../fixtures/testingMovieQuery.json'

test('should setup receive movies action object', (done) => {
  const dispatch = jest.fn()
  fetchMovies('director', 'James%20Cameron')(dispatch)
    .then(() => {
      expect(dispatch).toBeCalledWith({
        type: 'RECEIVE_MOVIES',
        movies: testingQuery
      })
    done()
  })
})