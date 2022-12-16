import React from 'react';

export default class ToggleSwitch extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isClicked: false };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    if (this.state.isClicked === false) {
      this.setState({ isClicked: true });
    } else if (this.state.isClicked === true) {
      this.setState({ isClicked: false });
    }
  }

  render() {
    let status;
    let circle;
    let text;
    if (this.state.isClicked === true) {
      status = 'on';
      circle = 'circle on';
      text = 'ON';
    } else if (this.state.isClicked === false) {
      status = 'off';
      circle = 'circle off';
      text = 'OFF';
    }
    return (
      <div onClick={this.handleClick}>
        <button className={status}></button>
        <div className={circle}></div>
        <span>{text}</span>
      </div>
    );
  }
}
