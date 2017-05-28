import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import injectTapEventPlugin from 'react-tap-event-plugin';

import {orange500} from 'material-ui/styles/colors'
import {deepOrange500} from 'material-ui/styles/colors'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import muiThemeable from 'material-ui/styles/muiThemeable'


// store
import store from './store/manageStore'

import './App.css';
import Home from './components/Home'
import Nav from './components/Nav'
import List from './components/List'
import EditForm from './components/EditForm'
import Footer from './components/Footer'
injectTapEventPlugin();

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: orange500,
    accent1Color: deepOrange500
  }
})

class App extends Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>

        <Provider store={store}>
          <BrowserRouter>
              <div>
                <Nav />

                <Route exact path="/" component={Home} />
                <Route exact path="/list" component={List} />
                <Route exact path="/edit/:id" component={(props) => <EditForm match={props.match}/>} />
                <Footer />
              </div>

          </BrowserRouter>
        </Provider>

      </MuiThemeProvider>
    );
  }
}

export default muiThemeable() (App);
