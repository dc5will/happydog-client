import React, { Component } from "react";
import Footer from '../../components/Footer/Footer'
import Checklist from '../../components/Checklist/Checklist'
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
          <header>
            <h3>Journals and Records</h3>
            <p>
              Keep important notes or documents for future vet visits or dog
              sitters. Consolidate all of your dog's important information such
              as vaccination records, allergies, special care instructions, and
              memories
            </p>
          </header>
        </section>
        <Footer />
      </React.Fragment>
    );
  }
}
