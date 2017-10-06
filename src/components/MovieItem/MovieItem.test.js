import React from 'react'
import { shallow } from 'enzyme'
import MovieItem from './MovieItem'
import movies from '../../fixtures/testingMovieQuery'

test('should render MovieItem correctly', () => {
  const wrapper = shallow(<MovieItem />)
  expect(wrapper).toMatchSnapshot()
})

test('should render MovieItem with movie', () => {
  const wrapper = shallow(<MovieItem movie={movies[2]}/>)
  expect(wrapper).toMatchSnapshot()
})