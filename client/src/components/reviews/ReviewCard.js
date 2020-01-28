import React from 'react';

import { render } from 'react-dom';

class ReviewCard extends React.Component {
  render() {
    return (
      <div className="card" key={this.props.id}>
        This is a review Card #{this.props.index}
        <div className="reviewer-email"> {this.props.email}</div>
        <div classname="review-text"> {this.props.review} </div>
      </div>
    );
  }
}

export default ReviewCard;
