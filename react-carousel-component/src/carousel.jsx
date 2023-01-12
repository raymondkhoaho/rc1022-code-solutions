import React from 'react';

export default class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentImage: 0,
      intervalId: null
    };
    this.handleCircleClick = this.handleCircleClick.bind(this);
    this.handleArrowClick = this.handleArrowClick.bind(this);
  }

  componentDidMount() {
    this.autoplay();
  }

  autoplay() {
    this.setState({
      intervalId: setInterval(() => {
        if (this.state.currentImage >= this.props.images.length - 1) {
          this.setState({ currentImage: 0 });
        } else {
          this.setState({ currentImage: this.state.currentImage + 1 });
        }
      }, 3000)
    });
  }

  handleArrowClick(event) {
    clearInterval(this.state.intervalId);
    this.autoplay();
    if (event.target.className === 'fa-solid fa-2xl fa-chevron-right right-arrow') {
      this.setState({ currentImage: this.state.currentImage + 1 });
      if (this.state.currentImage >= this.props.images.length - 1) {
        this.setState({ currentImage: 0 });
      }
    }
    if (event.target.className === 'fa-solid fa-2xl fa-chevron-left left-arrow') {
      this.setState({ currentImage: this.state.currentImage - 1 });
      if (this.state.currentImage <= 0) {
        this.setState({ currentImage: this.props.images.length - 1 });
      }
    }
  }

  handleCircleClick(event) {
    clearInterval(this.state.intervalId);
    this.autoplay();
    const circleNumber = Number(event.target.id);
    if (event.target.className === 'fa-regular fa-lg fa-circle two circle-icon') {
      this.setState({ currentImage: circleNumber });
    }
  }

  render() {
    const position = this.state.currentImage;
    const iconList = this.props.images.map((button, index) =>
      (<i className={position === index ? 'fa-solid fa-lg fa-circle one circle-icon' : 'fa-regular fa-lg fa-circle two circle-icon'}
      key={button.id} id={index} onClick={this.handleCircleClick} />
      ));
    return (
      <>
        <div className='row'>
          <div className='column-quarter'>
            <i className='fa-solid fa-2xl fa-chevron-left left-arrow' onClick={this.handleArrowClick}></i>
          </div>
          <div className='column-half centered'>
            <img src={this.props.images[position].image} className='each-image' />
          </div>
          <div className='column-quarter right'>
            <i className='fa-solid fa-2xl fa-chevron-right right-arrow' onClick={this.handleArrowClick}></i>
          </div>
        </div>
        <div className='row centered'>
          <div className='column-full carousel-circles'>{iconList}</div>
        </div>
      </>
    );
  }
}
