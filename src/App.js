import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
// import logo from './logo.svg';
// import BusinessList from './Components/businesses/BusinessList';
import businessCont from './Components/businesses/Business'
import Product from './Components/products/Products';
import Home from './Components/home/Home';
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
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