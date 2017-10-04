import React from 'react'
import { shallow } from 'enzyme'
import SearchHeader from '../../components/SearchHeader/SearchHeader'

test('should render SearchHeader correctly', () => {
  const wrapper = shallow(<SearchHeader />)
  expect(wrapper).toMatchSnapshot()
})
