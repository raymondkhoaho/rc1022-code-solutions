import React from 'react';

export default class AppDrawer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { modalOn: false };
    this.modalOpen = this.modalOpen.bind(this);
    this.modalClose = this.modalClose.bind(this);
  }

  modalOpen(event) {
    this.setState({ modalOn: true });
  }

  modalClose(event) {
    this.setState({ modalOn: false });
  }

  render() {
    let overlay;
    let modal;
    if (this.state.modalOn === false) {
      overlay = 'overlay overlay-hidden';
      modal = 'menu menu-hidden';
    } else if (this.state.modalOn === true) {
      overlay = 'overlay';
      modal = 'menu';
    }
    return (
      <div>
        <div onClick={this.modalClose} className={overlay}></div>
        <i onClick={this.modalOpen} className="fa-solid fa-bars"></i>
        <div className={modal}>
          <h2>Menu</h2>
          <ul>
            <li onClick={this.modalClose}><a href="#">About</a></li>
            <li onClick={this.modalClose}><a href="#">Get Started</a></li>
            <li onClick={this.modalClose}><a href="#">Contact Us</a></li>
            <li onClick={this.modalClose}><a href="#">Sign In</a></li>
          </ul>
        </div>
      </div>
    );
  }
}
