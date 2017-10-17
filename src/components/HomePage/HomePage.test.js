import React from 'react'
import { shallow } from 'enzyme'
import HomePage from './HomePage'

test('should render HomePage correctly', () => {
  const redirectTo = jest.fn()
  const wrapper = shallow(<HomePage redirectTo={redirectTo} />)
  expect(wrapper).toMatchSnapshot()
})
