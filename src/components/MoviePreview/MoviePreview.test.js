import React from 'react'
import { shallow } from 'enzyme'
import MoviePreview from './MoviePreview'
import movies from '../../fixtures/testingMovieQuery.json'
import error from '../../fixtures/errorResponse.json'

test('should render MoviePreview correctly', () => {
  const wrapper = shallow(<MoviePreview />)
  expect(wrapper).toMatchSnapshot()
})

test('should render MoviePreview with movie', () => {
  const onClick = jest.fn()
  const wrapper = shallow(<MoviePreview onClick={onClick} { ...movies[1] }/>)
  expect(wrapper).toMatchSnapshot()
})

test('should render MoviePreview with errorcode', () => {
  const wrapper = shallow(<MoviePreview { ...error }/>)
  expect(wrapper).toMatchSnapshot()
})