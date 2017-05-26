import React from 'react'
import {Link} from 'react-router-dom'


export default class Nav extends React.Component {
  render() {
    return(
      <div>
        <Link to="/" >Home</Link><br/>
        <Link to="/list" >List</Link>
      </div>
    )
  }
}
