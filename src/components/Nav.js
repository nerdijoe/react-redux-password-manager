import React from 'react'
import {Link} from 'react-router-dom'
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';


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
          <MenuItem onTouchTap={this.handleClose}><Link to="/" >Home</Link></MenuItem>
          <MenuItem onTouchTap={this.handleClose}><Link to="/list" >List</Link></MenuItem>
        </Drawer>

      </div>
    )
  }
}
