import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
// import logo from './logo.svg';
// import BusinessList from './Components/businesses/BusinessList';
import businessCont from './Components/businesses/Business'
import Product from './Components/products/Products';
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          {/* Home component route */}
          {/* <Route exact path="/" /> */}
          <Route path="/business/list/" component={businessCont} />
          <Route path="/business/product/" component={Product} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;


// /businesses/:id

// /posts/como-utilizar-redux-thunk/