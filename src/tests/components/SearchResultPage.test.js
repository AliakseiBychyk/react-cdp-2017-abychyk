import React from 'react'
import { shallow, mount } from 'enzyme'
import sinon from 'sinon'
import SearchResultPage from '../../components/SearchResultPage/SearchResultPage'
import movies from '../fixtures/testingMovieQuery.json'

let fetchMovies

beforeEach(() => {
  fetchMovies = jest.fn()
})

test('should render SearchResultPage correctly', () => {
  const wrapper = shallow(<SearchResultPage movies={[]} fetchMovies={fetchMovies}/>)
  expect(wrapper).toMatchSnapshot()
})

test('should render SearchResultPage with movies data', () => {
  const wrapper = shallow(<SearchResultPage movies={movies} fetchMovies={fetchMovies}/>)
  expect(wrapper).toMatchSnapshot()
})

test('should change SerchResultPage when props were changed', () => {
  const prevPropsQuery = "James%20Cameron"
  const newPropsQuery = "Quentin%20Tarantino"
  const spy = sinon.spy(SearchResultPage.prototype, 'componentDidUpdate')
  const wrapper = shallow(
    <SearchResultPage
      query={prevPropsQuery}
      movies={movies}
      fetchMovies={fetchMovies}
    />)
  expect(spy.calledOnce).toBe(false)
  wrapper.setProps({query: newPropsQuery })
  expect(spy.calledOnce).toBe(true)
})