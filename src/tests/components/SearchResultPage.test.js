import React from 'react'
import { shallow } from 'enzyme'
import SearchResultPage from '../../components/SearchResultPage/SearchResultPage'
import movies from '../fixture/testingMovieQuery.json'

test('should render SearchResultPage correctly', () => {
  const wrapper = shallow(<SearchResultPage />)
  expect(wrapper).toMatchSnapshot()
})
