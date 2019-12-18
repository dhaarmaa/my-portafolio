import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/home"/>
          <Route path="/project"/>
          <Route path="/about"/>
          <Route path="/contact"/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
