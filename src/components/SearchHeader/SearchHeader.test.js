import React from 'react'
import { shallow } from 'enzyme'
import SearchHeader from './SearchHeader'

let wrapper

beforeEach(() => {
  wrapper = shallow(<SearchHeader />)
});

test('should render SearchHeader correctly', () => {
  expect(wrapper).toMatchSnapshot()
})

test('should set query on input change', () => {
  const value = 'Quentin Tarantino'
  wrapper.find('FormControl').at(0).simulate('change', {
    target: { value }
  })
  expect(wrapper.state('query')).toBe(encodeURIComponent(value))
})

test('should set criterion on button click', () => {
  wrapper.find('Button').at(0).simulate('click')
  expect(wrapper.state('criterion')).toBe('title')
  wrapper.find('Button').at(1).simulate('click')
  expect(wrapper.state('criterion')).toBe('director')
})

test('should fireRedirect on button click', () => {
  wrapper.find('Form').simulate('submit', {
    preventDefault: () => { }
  })
  expect(wrapper.state('fireRedirect')).toBe(true)
})
