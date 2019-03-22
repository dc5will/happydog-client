import React, { Component } from 'react';
import RegistrationForm from '../RegistrationForm/RegistrationForm'
import { Section } from '../Utils/Utils'

export default class Registration extends Component {
    static defaultProps = {
        history: {
            push: () => {},
        }
    }

    handleRegistrationSuccess = user => {
        const { history } = this.props
        history.push('/login')
    }

    render() {
        return (
            <Section className='Registration'>
                <h2>Sign up now</h2>
                <RegistrationForm onRegistrationSuccess={this.handleRegistrationSuccess}/>
            </Section>
        )
    }
}