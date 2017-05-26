import React from 'react'

import SearchForm from './SearchForm'
import SearchResult from './SearchResult'

class List extends React.Component {

  render() {
    return (
      <div>
        List
        <SearchForm />
        <SearchResult />
      </div>
    )
  }
}

export default List
