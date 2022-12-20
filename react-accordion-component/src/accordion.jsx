import React from 'react';

export default class Accordion extends React.Component {
  constructor(props) {
    super(props);
    this.state = { detailOpen: null };
    this.detailsOpen = this.detailsOpen.bind(this);
  }

  detailsOpen(event) {
    if (event.target.id === this.state.detailOpen) {
      this.setState({ detailOpen: null });
    } else {
      this.setState({ detailOpen: event.target.id });
    }
  }

  render() {
    const topics = this.props.topics;
    const listItems = topics.map(topics => {
      const details = this.state.detailOpen === topics.number ? 'details' : 'details details-hide';
      return (
        <li key={topics.number}>
          <p onClick={this.detailsOpen} id={topics.number} className="name">{topics.name}</p>
          <p className={details}>{topics.details}</p>
        </li>
      );
    });
    return (
      <div>
        <ul>{listItems}</ul>
      </div>
    );
  }
}
