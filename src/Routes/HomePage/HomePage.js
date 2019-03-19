import React, { Component } from "react";
import Footer from '../../components/Footer/Footer'
import Checklist from '../../components/Checklist/Checklist'
// import Note from '../../components/Note/Note'
import "./HomePage.css";

export default class LandingPage extends Component {
  render() {
    return (
      <React.Fragment>
        <header>
            <h2>Welcome back</h2>
        </header>

        <section>
            <Checklist />
        </section>

        <section>

        </section>
        <Footer />
      </React.Fragment>
    );
  }
}
