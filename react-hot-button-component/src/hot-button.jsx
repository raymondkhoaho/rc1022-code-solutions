import React from 'react';

export default class HotButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { clickCount: 0 };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(state => ({ clickCount: this.state.clickCount + 1 }));
  }

  render() {
    if (this.state.clickCount <= 3) {
      return <button onClick={this.handleClick} className="hot-button three">Hot Button</button>;
    } else if (this.state.clickCount <= 6) {
      return <button onClick={this.handleClick} className="hot-button six">Hot Button</button>;
    } else if (this.state.clickCount <= 9) {
      return <button onClick={this.handleClick} className="hot-button nine">Hot Button</button>;
    } else if (this.state.clickCount <= 12) {
      return <button onClick={this.handleClick} className="hot-button twelve">Hot Button</button>;
    } else if (this.state.clickCount <= 15) {
      return <button onClick={this.handleClick} className="hot-button fifteen">Hot Button</button>;
    } else if (this.state.clickCount > 15) {
      return <button onClick={this.handleClick} className="hot-button eighteen">Hot Button</button>;
    }
  }
}
