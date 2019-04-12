import React, { Component } from "react";
import AuthApiService from "../../services/auth-api-service";
import { Button, Required, Input } from "../Utils/Utils";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import NotesContext from "../../contexts/NotesContext";
import "./Register.css";

class Register extends Component {
  static defaultProps = {
    onRegistrationSuccess: () => {}
  };
  static contextType = NotesContext;

  state = { error: null };

  handleSubmit = e => {
    e.preventDefault();
    this.setState({ error: null });
    const { full_name, user_name, password } = e.target;
    
    AuthApiService.postUser({
      user_name: user_name.value,
      password: password.value,
      full_name: full_name.value
    })
      .then(() => {
        full_name.value = "";
        user_name.value = "";
        password.value = "";
        this.props.history.push("/login");
      })
      .catch(res => {
        this.setState({ error: res.error });
      });
  };

  render() {
    const { error } = this.state;

    return (
      <>
        <Header />
        <section className="Registration">
          <h2>Welcome to Happydog</h2>
          <h3>Please enter your information to sign up!</h3>
          <form className="RegistrationForm" onSubmit={this.handleSubmit}>
            <div role="alert">{error && <p className="red">{error}</p>}</div>
            <div className="full_name">
              <label htmlFor="RegistrationForm_full_name">
                Full name <Required />
              </label>
              <Input
                name="full_name"
                type="text"
                id="RegistrationForm_full_name"
                required
              />
            </div>

            <div className="user_name">
              <label htmlFor="RegistrationForm_user_name">
                User name <Required />
              </label>
              <Input
                name="user_name"
                type="text"
                id="RegistrationForm_user_name"
                required
              />
            </div>

            <div className="password">
              <label htmlFor="RegistrationForm_password">
                Password <Required />
              </label>
              <Input
                name="password"
                type="password"
                id="RegistrationForm_password"
                required
              />
            </div>
            <Button className="registerButton" type="submit">
              Register <i className="fas fa-user-plus" />
            </Button>
          </form>
        </section>
        <Footer />
      </>
    );
  }
}

export default Register;
