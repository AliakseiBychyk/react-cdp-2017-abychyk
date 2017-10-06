import { setSearchCriterion, setSearchQuery } from './query'

test('should setup set search criterion action object with provided data', () => {
  const action = setSearchCriterion('title')
  expect(action).toEqual({
    type: 'SET_SEARCH_CRITERION',
    searchCriterion: 'title'
  })
})

test('should setup set search criterion action object with default data', () => {
  const action = setSearchCriterion()
  expect(action).toEqual({
    type: 'SET_SEARCH_CRITERION',
    searchCriterion: 'director'
  })
})

test('should setup set search query action object', () => {
  const action = setSearchQuery('The%20Terminator')
  expect(action).toEqual({
    type: 'SET_SEARCH_QUERY',
    searchQuery: 'The%20Terminator'
  })
})