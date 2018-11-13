import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
// import logo from './logo.svg';
import BusinessList from './Components/businesses/BusinessList';
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          {/* Home component route */}
          {/* <Route exact path="/" /> */}
          {/* Businesses list */}
          <Route path="/business/list/" component={BusinessList} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;


// /businesses/:id

// /posts/como-utilizar-redux-thunk/