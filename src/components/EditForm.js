import React from 'react'
import { connect } from 'react-redux'
import { Redirect, Link } from 'react-router-dom'

import { actionAddPassword, getById, actionEditPassword } from '../actions'
import Style from './EditForm.style'

import {Card, CardTitle, CardText} from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Snackbar from 'material-ui/Snackbar';
import Dialog from 'material-ui/Dialog';


class EditForm extends React.Component {


  constructor(props) {
    super(props)
    this.id = this.props.match.params.id

    this.state = {
      id: '',
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
      },
      is_submit_error: false,
      open: false
    }

  }

  handleTouchTap = () => {
    this.setState({
      open: true,
    }, () => {
      console.log((`handleTouchTap + ${this.state.open}`));
    });
  }

  handleRequestClose = () => {
    this.setState({
      open: false,
    });
  };

  handleErrorOpen = () => {
    this.setState({is_submit_error: true});
  };

  handleErrorClose = () => {
    this.setState({is_submit_error: false});
  };



  componentDidMount() {
    console.log("EditForm");
    this.props.getById(this.id)
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      id: nextProps.selected_data.id,
      url: nextProps.selected_data.url,
      username: nextProps.selected_data.username,
      password: nextProps.selected_data.password
    }, () => {
      this.validatePassword()
    })


  }

  handleSubmit(e) {
    e.preventDefault()

    console.log(`handleSubmit`, this.state)

    //check validation, if all true then proceed

    if(this.checkPasswordValidation()){
      this.props.actionEditPassword(this.state)

      this.clearFields()
      this.clearErrors()
      this.handleTouchTap()

      this.setState({
        is_submitted: true
      })
    }
    else {
      console.log('Password invalid')
      this.handleErrorOpen()
    }

  }

  clearFields() {
    this.setState({
      url: '',
      username: '',
      password: ''
    }, () => {
      console.log("*** clear form fields",this.state)
    })

  }

  clearErrors() {
    const validationErrors = this.state.validationErrors
    validationErrors.password_min_length = false
    validationErrors.password_lower_case_count = false
    validationErrors.password_upper_case_count = false
    validationErrors.password_contain_number = false
    validationErrors.password_contain_special_char = false

    this.setState({
      validationErrors
    }, () => {
      console.log("clearErrors",this.state.validationErrors)
    })

  }

  checkPasswordValidation() {
    const validationErrors = this.state.validationErrors

    return validationErrors.password_min_length && validationErrors.password_lower_case_count && validationErrors.password_upper_case_count && validationErrors.password_contain_number && validationErrors.password_contain_special_char
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


  printMessagePerLine(index) {
    let message = ""
    switch (index) {
      case 0: {
        message += "Password Strength"
        return message
      }
      case 1: {
        if(!this.state.validationErrors.password_min_length)
          message += "[ ] Password length is more than 5 chars."
        else
          message += "[v] Password length is more than 5 chars."

        return message
      }
      case 2: {
        if(!this.state.validationErrors.password_lower_case_count)
          message += "[ ] Password contains one lower case letter"
        else
          message += "[v] Password contains one lower case letter"
        return message
      }

      case 3: {
        if(!this.state.validationErrors.password_upper_case_count)
          message += "[ ] Password contains one upper case letter"
        else
          message += "[v] Password contains one upper case letter"
        return message
      }
      case 4: {
        if(!this.state.validationErrors.password_contain_number)
          message += "[ ] Password contains at least one number"
        else
          message += "[v] Password contains at least one number"
        return message
      }
      case 5: {
        if(!this.state.validationErrors.password_contain_special_char)
          message += "[ ] Password contains at least one special char"
        else
          message += "[v] Password contains at least one special char"
        return message
      }

      default: return message
    }
  }

  handleChange(e) {
    const target = e.target
    const value = target.value
    const name = target.name
    console.log(`handleChange: ${name}=[${value}]`)

    this.setState({
      [name]: value
    }, () => {
      //check min length
      if(name === 'password') {
        this.validatePassword()
      }
    })
  }

  validatePassword() {
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
    }, () => {
      console.log(this.state.validationErrors)
    })
  }

  render() {
    if(this.state.is_submitted) {
      return (
        <div>
          <Redirect to={{
            pathname: '/',
            state: { from: this.props.location }
          }} />
        </div>
      )
    }
    else {
      return (
        <div>

          <Card style={Style.card}>
              <CardTitle title="Edit Password" />
              <CardText>
                <form onSubmit={(e) => { this.handleSubmit(e)} }>

                  <TextField
                    floatingLabelText="URL"
                    id="text-field-default"
                    name='url'
                    value={this.state.url}
                    required='yes'
                    onChange={(e) => {this.handleChange(e)}}
                  />
                  <br />

                  <TextField
                    floatingLabelText="Username"
                    id="text-field-default"
                    name='username'
                    value={this.state.username}
                    required='yes'
                    onChange={(e) => {this.handleChange(e)}}
                  />
                  <br />

                  <TextField
                    floatingLabelText="Password"
                    id="text-field-default"
                    name='password'
                    value={this.state.password}
                    required='yes'
                    onChange={(e) => {this.handleChange(e)}}
                    type="password"
                  />
                  <br />

                  <div style={Style.button}>
                    <Link to='/'><RaisedButton label="Cancel" type="submit" /></Link>

                    <RaisedButton label="Save" primary={true} type="submit" />
                  </div>
                </form>

              </CardText>

            </Card>

            <Card style={Style.messageCard}>
              <CardTitle title="Password strength" titleColor="grey"/>
              <CardText>
                <div style={Style.message}>{this.printMessagePerLine(1)}</div>
                <div style={Style.message}>{this.printMessagePerLine(2)}</div>
                <div style={Style.message}>{this.printMessagePerLine(3)}</div>
                <div style={Style.message}>{this.printMessagePerLine(4)}</div>
                <div style={Style.message}>{this.printMessagePerLine(5)}</div>
              </CardText>
            </Card>

            <Snackbar
              open={this.state.open}
              message="Password has been added."
              autoHideDuration={1000}
              onRequestClose={this.handleRequestClose}
            />

            <Dialog
              modal={false}
              open={this.state.is_submit_error}
              onRequestClose={this.handleErrorClose}
            >
              <div style={Style.dialogErrorText}>Please check your password. Your password is not strong enough.</div>
            </Dialog>


        </div>
      )
    }

  }
}

const mapStateToProps = (state) => {
  return {
    selected_data: state.passwordReducer.selected_data
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    actionAddPassword: (form, last_id) => { dispatch(actionAddPassword(form, last_id)) },
    getById: (id) => { dispatch(getById(id)) },
    actionEditPassword: (form) => { dispatch(actionEditPassword(form)) }
  }
}

const connectedEditForm = connect(mapStateToProps, mapDispatchToProps)(EditForm)
export default connectedEditForm
