import React, { Component } from 'react'
import SearchHeader from '../SearchHeader/SearchHeader'
import MovieList from '../MovieList/MovieList'
import styles from './SearchResultPage.css'

const SearchResultPage = () => (
  <div className={styles.home}>
    <SearchHeader />
    <MovieList />
  </div>
)

export default SearchResultPage