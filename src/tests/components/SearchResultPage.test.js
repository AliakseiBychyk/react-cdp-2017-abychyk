import React from 'react'
import { shallow } from 'enzyme'
import SearchResultPage from '../../components/SearchResultPage/SearchResultPage'
import movies from '../fixtures/testingMovieQuery.json'

test('should render SearchResultPage correctly', () => {
  const fetchMovies = jest.fn()
  const wrapper = shallow(<SearchResultPage movies={[]} fetchMovies={fetchMovies}/>)
  expect(wrapper).toMatchSnapshot()
})

test('should render SearchResultPage with movies data', () => {
  const fetchMovies = jest.fn()
  const wrapper = shallow(<SearchResultPage movies={movies} fetchMovies={fetchMovies}/>)
  expect(wrapper).toMatchSnapshot()
})