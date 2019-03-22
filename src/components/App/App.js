import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import LandingPage from '../../components/LandingPage/LandingPage'
import Registration from '../../components/Registration/Registration';
import LoginPage from '../../components/LoginPage/LoginPage'
import HomePage from '../../components/HomePage/HomePage'
import AddNotesForm from '../../components/AddNotesForm/AddNotesForm';
// import PublicOnlyRoute from '../Utils/PublicOnlyRoute';
// import PrivateRoute from '../Utils/PrivateRoute';
import './App.css';

class App extends Component {

  render() {
    return (
      <div className='App'>
        <main className='App_main'>
          <Switch>
            <Route 
              exact
              path={'/'}
              component={LandingPage}
            />
            <Route
              path={'/register'}
              component={Registration}
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
              path={'/addnotes'}
              component={AddNotesForm}
            />
          </Switch>
        </main>
      </div>
    )
  }
}

export default App;