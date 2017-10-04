import React from 'react'
import { shallow } from 'enzyme'
import MovieItem from '../../components/MovieItem/MovieItem'
import movies from '../fixtures/testingMovieQuery'

test('should render MovieItem with movie', () => {
  const wrapper = shallow(<MovieItem movie={movies[2]}/>)
  expect(wrapper).toMatchSnapshot()
})