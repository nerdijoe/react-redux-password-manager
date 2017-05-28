import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { actionDeletePassword } from '../actions'
import Style from './SearchResult.style'


import {
  Table,
  TableBody,
  TableFooter,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import FlatButton from 'material-ui/FlatButton'
import IconClear from 'material-ui/svg-icons/content/clear'
import IconCreate from 'material-ui/svg-icons/content/create'

class SearchResult extends React.Component {

  state = {
    fixedHeader: true,
    fixedFooter: false,
    stripedRows: true,
    showRowHover: false,
    selectable: false,
    multiSelectable: false,
    enableSelectAll: false,
    deselectOnClickaway: true,
    showCheckboxes: false,
    height: '300px',
  };


  handleDelete(id) {
    console.log('handleDelete ' + id)
    this.props.actionDeletePassword(id)
  }

  render() {
    return (
      <div>
        <Table
          height={this.state.height}
          fixedHeader={this.state.fixedHeader}
          fixedFooter={this.state.fixedFooter}
          selectable={this.state.selectable}
          multiSelectable={this.state.multiSelectable}
          style={Style.myTable}
        >
          <TableHeader
            displaySelectAll={this.state.showCheckboxes}
            adjustForCheckbox={this.state.showCheckboxes}
            enableSelectAll={this.state.enableSelectAll}
          >
            <TableRow>
              <TableHeaderColumn colSpan="8" style={{textAlign: 'center'}}>
                Password Data
              </TableHeaderColumn>
            </TableRow>
            <TableRow>
              <TableHeaderColumn colSpan='2' tooltip="URL">URL</TableHeaderColumn>
              <TableHeaderColumn tooltip="Username">Username</TableHeaderColumn>
              <TableHeaderColumn tooltip="Password">Password</TableHeaderColumn>
              <TableHeaderColumn tooltip="Created Date">Created</TableHeaderColumn>
              <TableHeaderColumn tooltip="Updated Date">Updated</TableHeaderColumn>
              <TableHeaderColumn tooltip=""></TableHeaderColumn>
              <TableHeaderColumn tooltip=""></TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody
            displayRowCheckbox={this.state.showCheckboxes}
            deselectOnClickaway={this.state.deselectOnClickaway}
            showRowHover={this.state.showRowHover}
            stripedRows={this.state.stripedRows}
          >
            {this.props.search_result.map( d => {

              let created_at = (new Date(d.created_at)).toUTCString()
              let updated_at = ""
              if(d.updated_at) updated_at = (new Date(d.updated_at)).toUTCString()

              return (
              <TableRow key={d.id}>
                <TableRowColumn colSpan="2">{d.url}</TableRowColumn>
                <TableRowColumn>{d.username}</TableRowColumn>
                <TableRowColumn>{d.password}</TableRowColumn>
                <TableRowColumn>{created_at}</TableRowColumn>
                <TableRowColumn>{updated_at}</TableRowColumn>
                <TableRowColumn><FlatButton onClick={() => {this.handleDelete(d.id)}} icon={<IconClear />}></FlatButton>
                </TableRowColumn>
                <TableRowColumn><Link to={`/edit/${d.id}`}><FlatButton icon={<IconCreate />} /></Link></TableRowColumn>
              </TableRow>
              )
            })}
          </TableBody>
          <TableFooter
            adjustForCheckbox={this.state.showCheckboxes}
          >

            <TableRow>
              <TableRowColumn colSpan="8" style={{textAlign: 'center'}}>
                End of Data
              </TableRowColumn>
            </TableRow>
          </TableFooter>
        </Table>



      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    search_result: state.passwordReducer.search_result
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    actionDeletePassword: (id) => { dispatch(actionDeletePassword(id)) }
  }
}


const connectedSearchResult = connect(mapStateToProps, mapDispatchToProps)(SearchResult)
export default connectedSearchResult
