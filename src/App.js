import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navigation from "../src/components/Navigation"
import Home from "../src/views/js/home";
import Project from "../src/views/js/project";
import About from "../src/views/js/about";
import Contact from "../src/views/js/contact";


function App() {
  return (
    <div className="App">
   
      <Router>
     
        <Switch>
          <Route exact path="/" component= { Home } />
          <Route path="/home" component= { Home } />
          <Route path="/project" component={ Project } />
          <Route path="/about" component= { About } />
          <Route path="/contact" component= { Contact } />
        </Switch>
        
      </Router>
    </div>
  );
}

export default App;
