import React from 'react';
import './ReviewCard.css';


class ReviewCard extends React.Component {
  render() {
    return (
      <div className="review-card" key={this.props.id}>
        <p>{this.props.email}</p>
        <p>{this.props.review}</p>
      </div>
    );
  }
}

export default ReviewCard;
