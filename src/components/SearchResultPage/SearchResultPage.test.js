import React from 'react'
import { shallow, mount } from 'enzyme'
import sinon from 'sinon'
import SearchResultPage from './SearchResultPage'
import movies from '../../fixtures/testingMovieQuery.json'

let fetchMovies

beforeEach(() => {
  fetchMovies = jest.fn()
})

test('should render SearchResultPage correctly', () => {
  const wrapper = shallow(<SearchResultPage movies={[]} fetchMovies={fetchMovies}/>)
  expect(wrapper).toMatchSnapshot()
})

test('should render SearchResultPage with movies data', () => {
  const wrapper = shallow(<SearchResultPage movies={movies.results} fetchMovies={fetchMovies}/>)
  expect(wrapper).toMatchSnapshot()
})

test('should change SearchResultPage when props were changed', () => {
  const prevPropsQuery = 'James Cameron'
  const newPropsQuery = 'Quentin Tarantino'
  const spy = sinon.spy(SearchResultPage.prototype, 'componentDidUpdate')
  const wrapper = shallow(
    <SearchResultPage
      query={prevPropsQuery}
      movies={movies.results}
      fetchMovies={fetchMovies}
    />)
  expect(spy.calledOnce).toBe(false)
  wrapper.setProps({query: newPropsQuery })
  expect(spy.calledOnce).toBe(true)
})

test('should not change SearchResultPage when props were not changed', () => {
  const query = 'Paul Verhoeven'
  const criterion = 'director'
  const wrapper = shallow(
    <SearchResultPage
      query={query}
      criterion={criterion}
      movies={movies.results}
      fetchMovies={fetchMovies}
    />)
    expect(fetchMovies).toHaveBeenCalledWith(criterion, query);
  wrapper.setProps({ query })
  expect(fetchMovies).toHaveBeenCalledTimes(1)
})