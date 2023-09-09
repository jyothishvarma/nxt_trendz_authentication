// Write your JS code here
import {Component} from 'react'
import './index.css'

class LoginForm extends Component {
  state = {username: '', password: '', errMsg: ''}

  onChangeUsername = event => {
    this.setState({
      username: event.target.value,
    })
  }

  onChangePassword = event => {
    this.setState({
      password: event.target.value,
    })
  }

  onSubmitSuccess = () => {
    const {history} = this.props
    history.replace('/')
  }

  onSubmitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      this.onSubmitSuccess()
    } else {
      this.setState({
        errMsg: data.error_msg,
      })
    }
  }

  renderUsername = () => {
    const {username} = this.state
    return (
      <>
        <label htmlFor="username" className="label-el">
          USERNAME
        </label>
        <input
          id="username"
          className="input-el"
          type="text"
          placeholder="Username"
          onChange={this.onChangeUsername}
          value={username}
        />
      </>
    )
  }

  renderPassword = () => {
    const {password} = this.state
    return (
      <>
        <label htmlFor="password" className="label-el">
          PASSWORD
        </label>
        <input
          id="password"
          type="password"
          className="input-el"
          placeholder="Password"
          onChange={this.onChangePassword}
          value={password}
        />
      </>
    )
  }

  render() {
    const {errMsg} = this.state
    return (
      <div className="login-page-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
          alt="website login"
          className="website-login-desktop-image"
        />
        <form className="form-container" onSubmit={this.onSubmitForm}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
            alt="website logo"
            className="website-desktop-logo"
          />
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
            alt="website login"
            className="website-login-mobile-image"
          />
          <div className="form-inputs-container">
            {this.renderUsername()}
            {this.renderPassword()}
            <button type="submit" className="login-btn">
              Login
            </button>
            <p className="err-msg">{errMsg}</p>
          </div>
        </form>
      </div>
    )
  }
}

export default LoginForm
