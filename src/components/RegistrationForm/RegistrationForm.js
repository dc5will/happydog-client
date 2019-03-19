import React, { Component } from "react";
import { Button, Required, Input } from '../Utils/Utils'
import AuthApiService from '../../services/auth-api-service'

export default class RegistrationForm extends Component {
  static defaultProps = {
    onRegistrationSuccess: () => {}
  }

  state = { error: null }

  handleSubmit = e => {
    e.preventDefault()
    const { full_name, user_name, password } = e.target

    this.setState({ error: null })
    
    AuthApiService.postUser({
      user_name: user_name.value,
      password: password.value,
      full_name: full_name.value,
    })
      .then(user => {
        full_name.value = ''
        user_name.value = ''
        password.value = ''
        this.props.onRegistrationSuccess()
      })
      .catch(res => {
        this.setState({ error: res.error })
      })
  }

  render() {
    return (
      <form className="RegistrationForm" onSubmit={this.handleSubmit}>
        <div className="full_name">
          <label htmlFor="RegistrationForm_full_name">
            Full name <Required />
          </label>
          <Input
            name="full_name"
            type="text"
            id="RegistrationForm_full_name"
            required>
           </Input>
        </div>

        <div className="user_name">
          <label htmlFor="RegistrationForm_user_name">
            User name <Required />
          </label>
          <Input
            name='user_name'
            type='text'
            id='RegistrationForm__user_name'
            required>
          </Input>
        </div>

        <div className="password">
          <label htmlFor="RegistrationForm_password">
            Password <Required />
          </label>
          <Input
            name='password'
            type='password'
            id='RegistrationForm__password'
            required>
          </Input>
        </div>
        <Button type='submit'>
            Register
        </Button>
      </form>
    );
  }
}
