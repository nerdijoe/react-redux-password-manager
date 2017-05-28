import React from 'react'
import { connect } from 'react-redux'

import { actionFetchData } from '../actions'

import PasswordForm from './PasswordForm'
import SearchForm from './SearchForm'
import SearchResult from './SearchResult'
// import TestMui from './TestMui'

class Home extends React.Component {

  componentDidMount() {
    console.log("componentDidMount")
    this.props.actionFetchData()

  }



  render() {
    return (
      <div>
        <br/>
        Home
        <br/><br/>
        <PasswordForm />
        <br/><br/>
        <SearchForm />
        <br/><br/>
        <SearchResult />

      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    data: state.passwordReducer.data
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    actionFetchData: () => { dispatch(actionFetchData())}
  }
}

const connectedHome = connect(mapStateToProps, mapDispatchToProps)(Home)
export default connectedHome
