import React, { Component } from "react";
import {
    Route,
    NavLink,
    HashRouter
  } from "react-router-dom";
  import Home from "./Home";
  import Donate from "./Donate";
  import Contact from "./Contact"; 
class Main extends Component {
  render() {
    return (
        <HashRouter>
        <div className="Main">
          <h1>Students Helping Students</h1>
          <ul className="header">
            <li><NavLink exact to="/">Home</NavLink></li>
            <li><NavLink to="/Donate">Donate</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
          </ul>
          <div className="content">
          <Route exact path="/" component={Home}/>
          <Route path="/Donate" component={Donate}/>
          <Route path="/contact" component={Contact}/>  
          </div>
        </div>
        </HashRouter>
    );
  }
}
 
export default Main;