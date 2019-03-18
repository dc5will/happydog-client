import React, { Component } from "react";
import "./LandingPage.css";

export default class LandingPage extends Component {
  render() {
    return (
      <React.Fragment>
        <section>
          <header>
            <h3>Is Your Dog Happy?</h3>
          </header>
          <p>
            Take the guesswork out of making sure your dogs are happy by keeping
            track of all of your dogs needs and keep a record and journal for
            your beloved canine friend.
          </p>
        </section>

        <section>
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

        <footer className="footer">
          <div className="footer_brand-container">
            <p className="footer_author-text">
              Created by William Wong
            </p>
            <div className="footer_social-media">
            </div>
            <div className="copyright-text">
              <p>
                Copyright &copy; 2019
            </p>
            </div>
          </div>
        </footer>
      </React.Fragment>
    );
  }
}
