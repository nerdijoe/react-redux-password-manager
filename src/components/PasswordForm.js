import React from 'react'

export default class PasswordForm extends React.Component {



  render() {
    return (
      <div>

        <form>
          URL <input type='text'/>
          Username <input type='text'/>
          Password <input type='password' />
          <button type='submit'>Save</button>
        </form>

      </div>
    )
  }
}
