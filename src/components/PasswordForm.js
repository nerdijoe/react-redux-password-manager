import React from 'react'
import { connect } from 'react-redux'

import { actionAddPassword } from '../actions'

class PasswordForm extends React.Component {
  state = {
    url:'',
    username: '',
    password: '',
    validationRule: {
      password_min_length: 5,
      password_lower_case_count: 1,
      password_upper_case_count: 1,
      password_contain_number: 1,
      password_contain_special_char: 1
    },
    validationErrors: {
      password_min_length: false,
      password_lower_case_count: false,
      password_upper_case_count: false,
      password_contain_number: false,
      password_contain_special_char: false
    }
  }

  handleSubmit(e) {
    e.preventDefault()

    console.log(`handleSubmit`, this.state)

    //check validation, if all true then proceed

    this.props.actionAddPassword(this.state)
  }

  handleChange(e) {
    const target = e.target
    const value = target.value
    const name = target.name
    console.log(`handleChange: ${name}=[${value}]`)

    this.setState({
      [name]: value
    })

    //check min length
    if(name === 'password') {
      this.validationErrors.password_min_length = this.state.password.length <= this.validationRule.password_min_length ? false : true


    }

  }

  render() {
    return (
      <div>

        <form onSubmit={(e) => { this.handleSubmit(e)} }>
          URL <input type='text' name='url' value={this.state.url} onChange={(e) => {this.handleChange(e)}} required='required'/><br/>
          Username <input type='text' name='username' value={this.state.username} onChange={(e) => {this.handleChange(e)}} required='required'/><br/>
          Password <input type='password' name='password' value={this.state.password} onChange={(e) => {this.handleChange(e)}}  required='required'/><br/>
          <button type='submit'>Save</button>
        </form>

      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    actionAddPassword: (form, last_id) => { dispatch(actionAddPassword(form, last_id)) }
  }
}

const connectedPasswordForm = connect(mapStateToProps, mapDispatchToProps)(PasswordForm)
export default connectedPasswordForm
