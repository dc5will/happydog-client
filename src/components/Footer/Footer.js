import React, { Component } from "react";
import "./Footer.css";

export default class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="footer_brand-container">
          {/* <span className="footer_author-text">Created by William</span> */}
          <div className="footer_social-media" />
          <div className="copyright-text">
            <p>Copyright &copy; 2019</p>
          </div>
        </div>
      </footer>
    );
  }
}
