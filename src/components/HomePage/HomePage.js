import React from 'react'
import SearchHeader from '../SearchHeader/SearchHeader'
import styles from './HomePage.css'

const HomePage = (props) => {
 
  const redirectTo = (url) => {
    props.history.push(url)
  }

  return (
    <div className={styles.home}>
      <SearchHeader redirectTo={redirectTo} />
    </div>
  )
}

export default HomePage