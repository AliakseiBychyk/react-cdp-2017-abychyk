import queryReducer from './query'
import query from '../fixtures/query'

test('should set default state', () => {
  const state = queryReducer(undefined, { type: 'test-action' })
  expect(state).toEqual({searchCriterion: 'director', searchQuery: ''})
})

test('should set search criterion', () => {
  const searchCriterion = 'title'
  const action = {
    type: 'SET_SEARCH_CRITERION',
    searchCriterion
  }
  const state = queryReducer(query, action)
  expect(state.searchCriterion).toEqual(searchCriterion)
})

test('should set search query', () => {
  const searchQuery = 'Francis Ford Coppola'
  const action = {
    type: 'SET_SEARCH_QUERY',
    searchQuery
  }
  const state = queryReducer(query, action)
  expect(state.searchQuery).toEqual(searchQuery)
})