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
        history.push('/')
    }



    render() {
        return (
            <React.Fragment>
                <h2>Sign up now</h2>
                <Section className='RegistrationPage'>
                    <RegistrationForm onRegistrationSuccess={this.handleRegistrationSuccess}/>
                </Section>
            </React.Fragment>
        )
    }
}