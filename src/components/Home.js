import React from 'react'
import { connect } from 'react-redux'

import { actionFetchData } from '../actions'

import PasswordForm from './PasswordForm'

class Home extends React.Component {

  componentDidMount() {
    console.log("componentDidMount")
    this.props.actionFetchData()

  }

  render() {
    return (
      <div>
        Home

        <PasswordForm on/>
        <ul>
        { this.props.data.map( d => {
          return (
            <li key={d.id}>
              {d.url} - {d.username} - {d.password}
            </li>
          )
        })}
        </ul>

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
