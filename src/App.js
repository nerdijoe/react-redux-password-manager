import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'

import './App.css';
import Home from './components/Home'
import Nav from './components/Nav'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Nav />

          <Route path="/" component={Home} />

        </div>
      </BrowserRouter>
    );
  }
}

export default App;
