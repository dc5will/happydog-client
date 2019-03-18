import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from '../Header/Header';
import LandingPage from '../../Routes/LandingPage/LandingPage'
import RegistrationPage from '../../Routes/RegistrationPage/RegistrationPage'
import HomePage from '../../Routes/HomePage/HomePage'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <header className='App_header'>
          <Header />
        </header>
        <main className='App_main'>
          <Switch>
            <Route 
              exact
              path={'/'}
              component={LandingPage}
            />
            <Route
              path={'/register'}
              component={RegistrationPage}
            />
            <Route
              path={'/login'}
              component={HomePage}
            />
          </Switch>
        </main>
      </div>
    )
  }
}

export default App;