import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar';
import Snackbar from 'material-ui/Snackbar';


class TestMui extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }

  handleTouchTap = () => {
    this.setState({
      open: true,
    }, () => {
      console.log((`TestMui + ${this.state.open}`));
    });
  };

  handleRequestClose = () => {
    this.setState({
      open: false,
    });
  };

  render () {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
        <div>
          <AppBar title="Hey" />
          <RaisedButton label="Default" />

          <RaisedButton
            onTouchTap={this.handleTouchTap}
            label="Add to my calendar"
          />
          <Snackbar
            open={this.state.open}
            message="Hey"
            autoHideDuration={1000}
            onRequestClose={this.handleRequestClose}
          />
        </div>

      </MuiThemeProvider>
    )

  }
}

export default TestMui
