import React from 'react'
import { connect } from 'react-redux'

class SearchResult extends React.Component {
  handleDelete(id) {
    console.log('handleDelete ' + id)
  }

  render() {
    return (
      <div>

        <table>
          <thead>
          <tr>
            <th>URL</th>
            <th>Username</th>
            <th>Password</th>
            <th>Created at</th>
            <th>Updated at</th>
            <th>Actions</th>
          </tr>
          </thead>
          <tbody>
          {this.props.search_result.map (d => {

            let created_at = (new Date(d.created_at)).toUTCString()

            let updated_at = ""
            if(d.updated_at) updated_at = (new Date(d.updated_at)).toUTCString()

            return (
              <tr key={d.id}>
                <td>{d.url}</td>
                <td>{d.username}</td>
                <td>{d.password}</td>
                <td>{created_at}</td>
                <td>{updated_at}</td>
                <td><button onClick={() => {this.handleDelete(d.id)}}>Delete</button></td>
              </tr>
            )
          })}
          </tbody>
        </table>

      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    search_result: state.passwordReducer.search_result
  }
}

const connectedSearchResult = connect(mapStateToProps, null)(SearchResult)
export default connectedSearchResult
