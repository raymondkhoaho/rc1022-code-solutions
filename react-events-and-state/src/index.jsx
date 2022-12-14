import React from 'react';
import ReactDOM from 'react-dom/client';

class CustomButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isClicked: false };
    this.handleClick = this.handleClick.bind(this);
  }

  render() {
    if (this.state.isClicked) {
      return <button onClick={this.handleClick}>Thanks!</button>;
    }
    return <button onClick={this.handleClick}>Click Me!</button>;
  }

  handleClick() {
    this.setState({ isClicked: true });
  }
}

const element = <CustomButton />;
const container = document.querySelector('#root');
const root = ReactDOM.createRoot(container);

root.render(element);
