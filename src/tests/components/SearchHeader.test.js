import React from 'react'
import { shallow } from 'enzyme'
import SearchHeader from '../../components/SearchHeader/SearchHeader'

test('should render SearchHeader correctly', () => {
  const wrapper = shallow(<SearchHeader />)
  expect(wrapper).toMatchSnapshot()
})

test('should set query on input change', () => {
  const value = 'Quentin Tarantino'
  const wrapper = shallow(<SearchHeader />)
  wrapper.find('FormControl').at(0).simulate('change', {
    target: { value }
  })
  expect(wrapper.state('query')).toBe(encodeURIComponent(value))
})

test('should set criterion on button click', () => {
  const wrapper = shallow(<SearchHeader />)
  wrapper.find('Button').at(0).simulate('click')
  expect(wrapper.state('criterion')).toBe('title')
  wrapper.find('Button').at(1).simulate('click')
  expect(wrapper.state('criterion')).toBe('director')
})

test('should fireRedirect on button click', () => {
  const wrapper = shallow(<SearchHeader />)
  wrapper.find('Form').simulate('submit', {
    preventDefault: () => { }
  })
  expect(wrapper.state('fireRedirect')).toBe(true)
})
