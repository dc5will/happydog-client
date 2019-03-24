import React, { Component } from 'react';
// import { Link } from 'react-router-dom'
import AuthApiService from '../../services/auth-api-service'
import TokenService from '../../services/token-service';
import NotesContext from '../../contexts/NotesContext';

class Login extends Component {
  static defaultProps = {
    onLoginSuccess: () => {    }
  }
  static contextType = NotesContext

  state = { error: null }

  handleSubmitJwtAuth = ev => {
    ev.preventDefault()
    this.setState({ error: null })
    const { user_name, password } = ev.target
 
    AuthApiService.postLogin({
      user_name: user_name.value,
      password: password.value,
    })
      .then(res => {
        user_name.value = ''
        password.value = ''
        TokenService.saveAuthToken(res.authToken)
        this.props.history.push('/my-notes')
        this.context.getNotes()
      })
      .catch(res => {
        this.setState({ error: res.error })
      })
  }

  render(){
    const { error } = this.state

    return(
      <div>
        <h2>Welcome back!</h2>
        <h3>Please log in below:</h3>
        <form onSubmit={this.handleSubmitJwtAuth}>
          <div role='alert'>
            {error && <p className='red'>{error}</p>}
          </div>
          <div>
            <label>user name
              <input name='user_name' type='text' id='signUp_user_name' required/>
            </label>
          </div>
          <div>
            <label>Password
              <input name='password' type='password' id='password' required/>
            </label>
          </div>
          <button type='submit'>Login</button>
        </form>
      </div>
    )
  }
}

export default Login;