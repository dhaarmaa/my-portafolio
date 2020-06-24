import React from 'react';
// import { animateScroll as scroll} from 'react-scroll';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navigation from './components/Navigation';
import Home from "../src/views/js/home";
import Project from "../src/views/js/project";
import About from "../src/views/js/about";
import Contact from "../src/views/js/contact";


function App() {
  // Desplamiento hasta el borde inferior de la página
// onClickDown = () => {
//   scroll.scrollToBottom();
// }
// Desplamiento hasta el borde superior de la página
// onClickUp = () => {
//   scroll.scrollToTop();
// }

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
