import React from 'react'
import { shallow } from 'enzyme'
import MovieDetailPage from './MovieDetailPage'
import movies from '../../fixtures/testingMovieQuery.json'

let fetchMovies

beforeEach(() => {
  fetchMovies = jest.fn()
})

test('should render MovieDetailPage correctly', () => {
  const wrapper = shallow(<MovieDetailPage
    movies={[]}
    fetchMovies={fetchMovies} />)
  expect(wrapper).toMatchSnapshot()
})

test('should render MovieDetailPage with movies correctly', () => {
  const wrapper = shallow(<MovieDetailPage
    movie={movies[1]}
    movies={movies}
    fetchMovies={fetchMovies} />)
  expect(wrapper).toMatchSnapshot()
})