import React, { Component } from "react";
import "./LandingPage.css";
import Header from "../../components/Header/Header";
import Footer from '../../components/Footer/Footer';

export default class LandingPage extends Component {
  render() {
    return (
      <>
        <Header />
        <section className='bannerBackground'></section>
        <section className='happyDogDesciption'>
          <header>
            <h3>Is Your Dog Happy?</h3>
          </header>
          <p>
            Take the guesswork out of making sure your dogs are happy by keeping
            track of all of your dogs needs and keep a record and journal for
            your beloved canine friend.
          </p>
        </section>

        <section className='checkListDescription'>
          <header>
            <h3>Daily Checklist</h3>
            <p>
              Sometimes life is hectic and we're not sure if our furry family
              members have been taken care of. Utilize the easy to use daily
              checklist with your family to make sure someone in your family has
              fed and/or walked your dog.
            </p>
          </header>
        </section>

        <section className='notesAndTaskDescription'>
          <header>
            <h3>Secured Notes and Tasks</h3>
            <p>
              Keep secured important notes or tasks for future vet visits or dog
              sitters. Consolidate all of your dog's important information such
              as vaccination records, allergies, special care instructions, and
              memories.
            </p>
          </header>
        </section>
        <Footer />
      </>
    );
  }
}
