import React from 'react'
import { shallow, mount } from 'enzyme'

import {Card, CardTitle, CardText} from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Snackbar from 'material-ui/Snackbar';
import Dialog from 'material-ui/Dialog';

import ConnectedPasswordForm, {PasswordForm} from '../../components/PasswordForm'

describe('PasswordForm', () => {
  let wrapper
  beforeEach( () => {
    wrapper = shallow(<PasswordForm />)
  })

  it('should render without error', () => {
    expect(wrapper).toBeDefined
  })

  it('should render all little components', () => {
    expect(wrapper.contains(
      <Card />,
      <CardTitle />,
      <CardText />,
      <TextField />,
      <RaisedButton />,
      <Dialog />
    )).toBeDefined
  })

  it('should have initial form state', () => {
    const expectedState = {
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
      open: false,
      is_submit_error: false
    }

    expect(wrapper.state()).toEqual(expectedState)
  })

  it('should change state when user inputs the form fields', () => {
    let event = {
      target: {
        name: 'url',
        value: 'theverge.com'
      }
    }

    wrapper.instance().handleChange(event)
    let url_state = wrapper.state('url')
    expect(url_state).toEqual('theverge.com')

    event = {
      target: {
        name: 'username',
        value: 'ijo'
      }
    }

    wrapper.instance().handleChange(event)
    let username_state = wrapper.state('username')
    expect(username_state).toEqual('ijo')

    event = {
      target: {
        name: 'password',
        value: '123456'
      }
    }

    wrapper.instance().handleChange(event)
    let password_state = wrapper.state('password')
    expect(password_state).toEqual('123456')

  })

  it('should trigger dialog error message when password is not valid', () => {
    let event = {
      target: {
        name: 'url',
        value: 'google.com'
      }
    }

    wrapper.instance().handleChange(event)

    event = {
      target: {
        name: 'username',
        value: 'ijo'
      }
    }
    wrapper.instance().handleChange(event)

    event = {
      target: {
        name: 'password',
        value: 'invalidpassword'
      }
    }

    wrapper.instance().handleChange(event)

    console.log(wrapper.state())

    // const button = wrapper.find(RaisedButton)
    // console.log(button.props());
    // button.simulate('click')
    //
    //
    // const formOnSubmit = wrapper.find('form').props().onSubmit
    // console.log(formOnSubmit)
    // formOnSubmit(event)

    wrapper.instance().handleErrorOpen()

    console.log(wrapper.state('is_submit_error'));
    expect(wrapper.state('is_submit_error')).toEqual(true)

  })



})
