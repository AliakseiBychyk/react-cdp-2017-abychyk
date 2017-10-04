import React from 'react'
import { shallow } from 'enzyme'
import MoviePreview from '../../components/MoviePreview/MoviePreview'
import movies from '../fixtures/testingMovieQuery.json'

test('should render MoviePreview with movie', () => {
  const wrapper = shallow(<MoviePreview { ...movies[1] }/>)
  expect(wrapper).toMatchSnapshot()
})