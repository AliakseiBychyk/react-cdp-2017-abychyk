import React from 'react'
import { shallow } from 'enzyme'
import MovieList from './MovieList'
import movies from '../../fixtures/testingMovieQuery.json'

test('should render MovieList with movies', () => {
  const wrapper = shallow(<MovieList movies={movies}/>)
  expect(wrapper).toMatchSnapshot()
})

test('should render MovieList with empty movie array', () => {
  const wrapper = shallow(<MovieList movies={[]} />)
  expect(wrapper).toMatchSnapshot()
})