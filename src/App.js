import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import { Provider } from 'react-redux'

// store
import store from './store/manageStore'

import './App.css';
import Home from './components/Home'
import Nav from './components/Nav'
import List from './components/List'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div>
            <Nav />

            <Route exact path="/" component={Home} />
            <Route exact path="/list" component={List} />

          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
