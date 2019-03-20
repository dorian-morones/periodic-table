import React, { Component } from 'react';
import { Route, Router } from "react-router"
import './App.css';
import PropTypes from "prop-types"
import Home from "./views/home"
import Header from "../src/components/Header/index.js"

class App extends Component {
  render() {
    return (
      <Router history={this.props.history}>
        <div className="App">
          <Header />
          <Route exact path="/" component={Home} />
        </div>
      </Router>
    );
  }
}

App.propTypes = {
  history: PropTypes.any.isRequired
}

export default App;
