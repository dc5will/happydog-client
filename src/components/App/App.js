import React, { Component } from 'react';
import { Switch } from 'react-router-dom';
import Header from '../Header/Header';
import LandingPage from '../../routes/LandingPage/LandingPage'
import RegistrationPage from '../../routes/RegistrationPage/RegistrationPage'
import LoginPage from '../../routes/LoginPage/LoginPage'
import HomePage from '../../routes/HomePage/HomePage'
import AddNote from '../../routes/AddNote/AddNote'
import PublicOnlyRoute from '../Utils/PublicRoute';
import PrivateRoute from '../Utils/PrivateRoute';
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
            <PublicOnlyRoute 
              exact
              path={'/'}
              component={LandingPage}
            />
            <PublicOnlyRoute
              path={'/register'}
              component={RegistrationPage}
            />
            <PublicOnlyRoute
              path={'/login'}
              component={LoginPage}
            />
            <PrivateRoute
              path={'/homepage'}
              component={HomePage}
            />
            <PrivateRoute
              path={'/addnote'}
              component={AddNote}
            />
          </Switch>
        </main>
      </div>
    )
  }
}

export default App;