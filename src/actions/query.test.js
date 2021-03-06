import { setSearchCriterion, setSearchQuery } from './query'

test('should setup set search criterion action object with provided data', () => {
  const action = setSearchCriterion('movie')
  expect(action).toEqual({
    type: 'SET_SEARCH_CRITERION',
    searchCriterion: 'movie'
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
  const action = setSearchQuery('The Terminator')
  expect(action).toEqual({
    type: 'SET_SEARCH_QUERY',
    searchQuery: 'The Terminator'
  })
})