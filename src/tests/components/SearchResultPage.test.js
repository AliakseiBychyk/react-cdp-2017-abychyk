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

test('should change SearchResultPage when props were changed', () => {
  const prevPropsQuery = 'James Cameron'
  const newPropsQuery = 'Quentin Tarantino'
  const criterion = 'director'
  const spy = sinon.spy(SearchResultPage.prototype, 'componentDidUpdate')
  const wrapper = shallow(
    <SearchResultPage
      query={prevPropsQuery}
      criterion={criterion}
      movies={movies}
      fetchMovies={fetchMovies}
    />)
  expect(spy.calledOnce).toBe(false)
  wrapper.setProps({query: newPropsQuery })
  expect(spy.calledOnce).toBe(true)
  expect(fetchMovies).toHaveBeenLastCalledWith(criterion, newPropsQuery)
})