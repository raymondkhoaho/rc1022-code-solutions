import React from 'react';

let currentCount = 0;
export default class Stopwatch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: currentCount,
      isStarted: false,
      intervalID: null
    };
    this.handleClick = this.handleClick.bind(this);
    this.resetClick = this.resetClick.bind(this);
  }

  resetClick() {
    if (this.state.isStarted === false) {
      currentCount = 0;
      this.setState({ count: currentCount });
    }
  }

  handleClick() {
    if (this.state.isStarted === false) {
      this.setState({
        isStarted: true,
        intervalID: setInterval(() => this.setState({ count: currentCount++ }), 1000)
      });
    } else if (this.state.isStarted === true) {
      this.setState({ isStarted: false });
      clearInterval(this.state.intervalID);
    }
  }

  render() {
    let button;
    if (this.state.isStarted === false) {
      button = 'fa-solid fa-play';
    } else if (this.state.isStarted === true) {
      button = 'fa-solid fa-pause';
    }
    return (
      <div className="row">
        <div onClick={this.resetClick} className="timer">
          <p>{this.state.count}</p>
        </div>
        <i onClick={this.handleClick} className={button}></i>
      </div>
    );
  }
}
