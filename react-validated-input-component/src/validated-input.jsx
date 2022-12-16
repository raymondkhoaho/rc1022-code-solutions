import React from 'react';

export default class ValidatedInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      password: '',
      check: '',
      text: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    if (this.state.password === '') {
      this.setState({
        check: 'fa-solid fa-xmark',
        text: 'A password is required'
      });
    } else if (this.state.password.length < 8) {
      this.setState({
        check: 'fa-solid fa-xmark',
        text: 'Your password is too short'
      });
    } else if (this.state.password.length >= 8) {
      this.setState({ check: 'fa-solid fa-check' });
    }
  }

  handlePasswordChange(event) {
    this.setState({
      password: event.target.value,
      check: '',
      text: ''
    });
  }

  render() {

    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="password">
          Password <br />
          <input type="password" id="password" value={this.state.password} onChange={this.handlePasswordChange} />
        </label>
        <i className={this.state.check}></i>
        <p>{this.state.text}</p>
      </form>
    );
  }
}
