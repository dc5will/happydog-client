import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from '../Header/Header';
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
            {/* TODO: Start setting up Routes here */}
            <Route />
          </Switch>
        </main>
      </div>
    )
  }
}

export default App;