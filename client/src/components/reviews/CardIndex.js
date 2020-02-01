import React from 'react';
import { connect } from 'react-redux';
import { render } from 'react-dom';
import axios from 'axios';
import { reviewTest } from '../../test-db';

import ReviewCard from './ReviewCard';

function mapStateToProps(state) {
  return {
    // This is an array of order objects.
    reviews: state.review.reviews
  };
}

class CardIndex extends React.Component {
  setReviews = e => {
    this.props.dispatch({ type: 'UPDATE_REVIEWS', newReviews: e });
  };

  getReviews = async () => {
    try {
      let response = await axios({
        method: 'GET',
        url: `/api/orders/reviews`
      });
      console.log(`response.data:${response.data}`);
      this.setReviews(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  getReviews2 = () => {
    this.setReviews(reviewTest);
  };

  componentDidMount() {
    this.getReviews2();
  }

  createArray = item => {
    return item.map(i => {
      const review = i.review;
      return <ReviewCard key={i.id} review={review} email={i.customerEmail} />;
    });
  };

  render() {
    return (
      <div id="reviews">
        <div className="grid">
          {this.createArray(this.props.reviews).map(reviewCard => {
            return reviewCard;
          })}
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps)(CardIndex);
