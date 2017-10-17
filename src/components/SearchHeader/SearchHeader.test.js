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
  expect(wrapper.state('query')).toBe(value)
})

test('should set criterion on button click', () => {
  wrapper.find('Button').at(0).simulate('click')
  expect(wrapper.state('criterion')).toBe('movie')
  wrapper.find('Button').at(1).simulate('click')
  expect(wrapper.state('criterion')).toBe('person')
})

test('should fireRedirect on button click', () => {
  const query = wrapper.state('query')
  const criterion = wrapper.state('criterion')
  wrapper.find('Form').simulate('submit', {
    preventDefault: () => { }
  }, )
  expect(wrapper.props('redirectTo')).toEqual(`/search/${query}?criterion=${criterion}`)
})
