import React from 'react';
import ReactDOM from 'react-dom/client';

class RegistrationForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log('state:', this.state);
  }

  handleUsernameChange(event) {
    this.setState({ username: event.target.value });
  }

  handlePasswordChange(event) {
    this.setState({ password: event.target.value });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="username">
          Username
          <input type="text" id="username" value={this.state.username} onChange={this.handleUsernameChange} />
        </label>
        <label htmlFor="password">
          Password
          <input type="password" id="password" value={this.state.password} onChange={this.handlePasswordChange} />
        </label>
        <input type="submit" value="Sign Up" />
      </form>
    );
  }
}

const container = document.querySelector('#root');
const root = ReactDOM.createRoot(container);
const element = <RegistrationForm />;
root.render(element);
