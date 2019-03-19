import React, { Component } from 'react';
import { Button, Input } from '../Utils/Utils';
import TokenService from '../../services/token-service';

export default class LoginForm extends Component {
    static defaultProps = {
        onLoginSuccess: () => {}
    }

    handleSubmitBasicAuth = event => {
        event.preventDefault()
        const { user_name, password } = event.target;

        // make token and save it
        TokenService.saveAuthToken(
            TokenService.makeBasicAuthToken(user_name.value, password.value)
        )

        user_name.value = ''
        password.value = ''
        this.props.onLoginSuccess()
    }

    render() {
        return (
            <form
                className='LoginForm'
                onSubmit={this.handleSubmitBasicAuth}
            >
            <div className='user_name'>
                <label htmlFor='LoginForm__user_name'>
                    User name
                </label>
            <Input
                required
                name='user_name'
                id='LoginForm__user_name'>
            </Input>
            </div>
            <div className='password'>
                <label htmlFor='LoginForm__password'>
                    Password
                </label>
            <Input
                required
                name='password'
                type='password'
                id='LoginForm__password'>
            </Input>
            </div>
                <Button type='submit'>
                    Login
                </Button>
            </form>
        )
    }
}