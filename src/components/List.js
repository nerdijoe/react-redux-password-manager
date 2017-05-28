import React from 'react'

import SearchForm from './SearchForm'
import SearchResult from './SearchResult'
import TestMui from './TestMui'

class List extends React.Component {

  render() {
    return (
      <div>
        List
        <SearchForm />
        <SearchResult />
        <TestMui />
      </div>
    )
  }
}

export default List
