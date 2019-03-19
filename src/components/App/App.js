import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from '../Header/Header';
import LandingPage from '../../routes/LandingPage/LandingPage'
import RegistrationPage from '../../routes/RegistrationPage/RegistrationPage'
import LoginPage from '../../routes/LoginPage/LoginPage'
import HomePage from '../../routes/HomePage/HomePage'
import AddNote from '../../routes/AddNote/AddNote'
// import PublicOnlyRoute from '../Utils/PublicOnlyRoute';
// import PrivateRoute from '../Utils/PrivateRoute';
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
              component={LoginPage}
            />
            <Route
              path={'/homepage'}
              component={HomePage}
            />
            <Route
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