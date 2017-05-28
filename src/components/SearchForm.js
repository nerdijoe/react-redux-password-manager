import React from 'react'
import { connect } from 'react-redux'
import TextField from 'material-ui/TextField';


import { search } from '../actions'

class SearchForm extends React.Component {
  state = {
    text: ''
  }

  handleChange(e) {
    console.log('handleOnChange')
    this.setState({
      text: e.target.value
    })

    this.props.search(this.state.text)
  }

  handleSubmit(e) {
    e.preventDefault()
    this.props.search(this.state.text)
  }

  render() {
    return(
      <form onSubmit={(e) => {this.handleSubmit(e)}}>
        <TextField
          floatingLabelText="Search"
          id="text-field-default"
          name='search'
          value={this.state.text}
          onChange={(e) => { this.handleChange(e) }}
        />

      </form>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    search: (text) => { dispatch(search(text)) }
  }
}

const connectedSearchForm = connect(null, mapDispatchToProps)(SearchForm)
export default connectedSearchForm
