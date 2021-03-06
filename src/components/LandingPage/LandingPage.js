import React, { Component } from "react";
import "./LandingPage.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

export default class LandingPage extends Component {
  render() {
    return (
      <>
        <Header />
        <section className="bannerBackground" />
        <section className="happyDogDesciption">
          <header>
            <h2>Is Your Dog Happy?</h2>
          </header>
          <p>
            Take the guesswork out of making sure your dogs are happy by keeping
            track of all of their basic needs. Ensure someone in your
            family takes care of your furry friend's basic needs and more.
            
          </p>
        </section>

        <section className="checkListDescription">
          <header>
            <h2>Daily Checklist</h2>
            <p>
              Sometimes life is hectic and we're not sure if our furry family
              members have been taken care of. Utilize the easy to use daily
              checklist with your family to make sure someone in your family has
              fed and/or walked your dog.
            </p>
          </header>
        </section>

        <section className="notesAndTaskDescription">
          <header>
            <h2>Secured Notes and Tasks</h2>
            <p>
              Keep secured important notes and tasks for your dog. Consolidate
              notes of your dog's most important needs and assign tasks with 
              dates in order to keep your dog
              healthy and happy.
            </p>
          </header>
        </section>
        <Footer />
      </>
    );
  }
}
