import React from 'react'
import {Link} from 'react-router-dom'
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

import Style from './Nav.style'

export default class Nav extends React.Component {

  state = {open: false};

  handleLeftIconButtonTouchTap() {
    console.log("hey")
  }

  handleToggle = () => this.setState({open: !this.state.open});

  handleClose = () => this.setState({open: false});

  render() {
    return(
      <div>

        <AppBar
          title="Password Manager"

          onLeftIconButtonTouchTap={() => {this.handleToggle()}}
        />

        <Drawer
          docked={false}
          width={200}
          open={this.state.open}
          onRequestChange={(open) => this.setState({open})}
        >
          <Link to="/" style={Style.link}><MenuItem onTouchTap={this.handleClose}>Home</MenuItem></Link>
          <Link to="/list" style={Style.link}><MenuItem onTouchTap={this.handleClose}>List</MenuItem></Link>
        </Drawer>

      </div>
    )
  }
}
