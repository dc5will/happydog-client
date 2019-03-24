import React, { Component } from 'react'
import AuthApiService from '../../services/auth-api-service'

class SignUp extends Component {
  static defaultProps = {
    onRegistrationSuccess: () => {}
  }

  state = { error: null }

  handleSubmit = ev => {
    ev.preventDefault()
    const { full_name, user_name, password } = ev.target
    this.setState({ error: null })
    AuthApiService.postUser({
      user_name: user_name.value,
      password: password.value,
      full_name: full_name.value,
    })
      .then(() => {
        full_name.value = ''
        user_name.value = ''
        password.value = ''
        this.props.history.push('/login')
      })
      .catch(res => {
        this.setState({ error: res.error })
      })
  }

  render(){
    const { error } = this.state

    return(
      <div> 
        <h2>Welcome to Happydog</h2>
        <h3>Please enter your user name and password to get started</h3>
        <form onSubmit={this.handleSubmit}>
        <div role='alert'>
          {error && <p className='red'>{error}</p>}
        </div>
          <div className='full_name'>
            <label>Full name
              <input name='full_name' type='text' id='signUp_full_name' required/>
            </label>
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
          <button type='submit'>Submit</button>
        </form>
      </div>    
    )
  }
}

export default SignUp