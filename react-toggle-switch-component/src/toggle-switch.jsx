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
    if (this.state.isClicked === true) {
      return (
        <div onClick={this.handleClick}>
          <button className="on"></button>
          <div className="circle on"></div>
          <span>ON</span>
        </div>
      );
    } else if (this.state.isClicked === false) {
      return (
        <div onClick={this.handleClick}>
          <button className="off"></button>
          <div className="circle off"></div>
          <span>OFF</span>
        </div>
      );
    }
  }
}
