import React from 'react'
import { shallow } from 'enzyme'
import MovieDetailPage from '../../components/MovieDetailPage/MovieDetailPage'
import movies from '../fixtures/testingMovieQuery.json'

test('should render MovieDetailPage correctly', () => {
  const fetchMovies = jest.fn()
  const wrapper = shallow(<MovieDetailPage
    movies={[]}
    fetchMovies={fetchMovies} />)
  expect(wrapper).toMatchSnapshot()
})

test('should render MovieDetailPage with movies correctly', () => {
  const fetchMovies = jest.fn()
  const wrapper = shallow(<MovieDetailPage
    movie={movies[1]}
    movies={movies}
    fetchMovies={fetchMovies} />)
  expect(wrapper).toMatchSnapshot()
})