import React from 'react'

import SearchForm from './SearchForm'
import SearchResult from './SearchResult'
// import TestMui from './TestMui'

class List extends React.Component {

  render() {
    return (
      <div>
        <SearchForm />
        <SearchResult />

      </div>
    )
  }
}

export default List
