import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

export default class Header extends Component {
  render() {
    return (
      <React.Fragment>
        <nav className="Header">
          <h1>
            <Link to="/">Happy dog</Link>
          </h1>
          <div className="Header_not-logged-in">
            <Link to="/login">Log in</Link>
            <Link to="/register">Register</Link>
          </div>
        </nav>
      </React.Fragment>
    );
  }
}
