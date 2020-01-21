import React, { Component } from 'react';
import '../components/navigation.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Navigation extends Component {
    render(){
        return(
            <nav className="navbar">
                {/* <div className="nav-link"> */}
                    <Link to="/home" className="Navigation-link">{this.props.home}</Link>
                    <Link to="/project" className="Navigation-link">{this.props.project}</Link>
                    <Link to="/about" className="Navigation-link">{this.props.about}</Link>
                    {/* <Link to="/contact" className="Navigation-link">{this.props.contact}</Link> */}
                    <Link to="/" className ="Navigation-link">{this.props.Curriculum}</Link>
                {/* </div> */}
            </nav>
        )
    }
}

export default  Navigation;