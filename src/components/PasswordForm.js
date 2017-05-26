import React from 'react'

export default class PasswordForm extends React.Component {

  handleSubmit(e) {
    e.preventDefault()

    console.log('handleSubmit')
  }

  render() {
    return (
      <div>

        <form onSubmit={(e) => { this.handleSubmit(e)}}>
          URL <input type='text'/><br/>
          Username <input type='text'/><br/>
          Password <input type='password' /><br/>
          <button type='submit'>Save</button>
        </form>

      </div>
    )
  }
}
