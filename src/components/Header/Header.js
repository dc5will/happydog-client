import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import TokenService from "../../services/token-service";

export default class Header extends Component {
  handleLogoutClick = () => {
    TokenService.clearAuthToken();
  };

  renderLogoutLink() {
    return (
      <div className="Header_logged-in">
        <Link onClick={this.handleLogoutClick} to="/">
          Log Out
        </Link>
      </div>
    );
  }

  renderLoginLink() {
    return (
      <div className="Header_not-logged-in">
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
      </div>
    );
  }

  render() {
    return (
      <React.Fragment>
        <nav className="Header">
          <h1 className='happyDogLogo'>
            <Link to="/my-notes">Happy Dog</Link>
          </h1>
          {TokenService.hasAuthToken()
            ? this.renderLogoutLink()
            : this.renderLoginLink()}
        </nav>
      </React.Fragment>
    );
  }
}
