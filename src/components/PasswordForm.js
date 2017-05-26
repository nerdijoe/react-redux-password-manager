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

  printMessage() {
    let message = "Password Strength "
    if(!this.state.validationErrors.password_min_length)
      message += "[ ] Password length is more than 5 chars."
    else
      message += "[v] Password length is more than 5 chars."

    if(!this.state.validationErrors.password_lower_case_count)
      message += "[ ] Password contains one lower case letter"
    else
      message += "[v] Password contains one lower case letter"

    if(!this.state.validationErrors.password_upper_case_count)
      message += "[ ] Password contains one upper case letter"
    else
      message += "[v] Password contains one upper case letter"

    if(!this.state.validationErrors.password_contain_number)
      message += "[ ] Password contains at least one number"
    else
      message += "[v] Password contains at least one number"

    if(!this.state.validationErrors.password_contain_special_char)
      message += "[ ] Password contains at least one special char"
    else
      message += "[v] Password contains at least one special char"



    return message
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
      const validationErrors = this.state.validationErrors
      if(this.state.password.length <= this.state.validationRule.password_min_length) {
        validationErrors.password_min_length = false
      }
      else {
        validationErrors.password_min_length = true
      }

      //lower case

      if(/[a-z]/.test(this.state.password)) {
        validationErrors.password_lower_case_count = true
      }
      else {
        validationErrors.password_lower_case_count = false
      }

      if(/[A-Z]/.test(this.state.password)) {
        validationErrors.password_upper_case_count = true
      }
      else {
        validationErrors.password_upper_case_count = false
      }

      if(/\d/.test(this.state.password)) {
        validationErrors.password_contain_number = true
      }
      else {
        validationErrors.password_contain_number = false
      }

      if(/\W/.test(this.state.password)) {
        validationErrors.password_contain_special_char = true
      }
      else {
        validationErrors.password_contain_special_char = false
      }


      this.setState({
        validationErrors
      })


      console.log(this.state.validationErrors)
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

        {this.printMessage()}

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
