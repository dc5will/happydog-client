import React, { Component } from 'react';
import RegistrationForm from '../../components/RegistrationForm/RegistrationForm'
import { Section } from '../../components/Utils/Utils'

export default class RegistrationPage extends Component {
    static defaultProps = {
        history: {
            push: () => {},
        }
    }

    handleRegistrationSuccess = user => {
        const { history } = this.props
        history.push('/homepage')
    }

    render() {
        return (
            <Section className='RegistrationPage'>
                <h2>Sign up now</h2>
                <RegistrationForm onRegistrationSuccess={this.handleRegistrationSuccess}/>
            </Section>
        )
    }
}