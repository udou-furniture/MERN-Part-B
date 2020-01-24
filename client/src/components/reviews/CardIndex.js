import React from 'react';
import { connect } from 'react-redux';
import { render } from 'react-dom';
import axios from 'axios';
import { reviewTest } from '../../test-db';

import ReviewCard from './ReviewCard';
// import {ReviewCard2} from './ReviewCard';

function mapStateToProps(state) {
  console.log(`map Props ${JSON.stringify(state.review.reviews)}`);
  return {
    reviews: state.review.reviews
  };
}

// const Test = ({stations}) => (
//   <div>
//     {stations.map(station => (
//       <li className="ReviewCard" key={station.call}>{station.call}</div>
//     ))}
//   </div>
// );

class CardIndex extends React.Component {

  setReviews = e => {
    // console.log(`setReviews done:${JSON.stringify(e)}`);
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
    console.log(`get2: ${JSON.stringify(reviewTest)}`);
    this.setReviews(reviewTest);
  };

  componentDidMount() {
    console.log('mounted');
    this.getReviews2();
  }

  createArray = item => {
    console.log(`create array item: ${JSON.stringify(item)}`);
    return item.map(i => {
      const review = i.review;
      return <ReviewCard review={review} email={i.customerEmail} />;
    });
  };

  render() {
    return (
      <div>
        <ul>
          {this.createArray(this.props.reviews).map(reviewCard => {
            // console.log(reviewCard)
            return reviewCard;
          })}
        </ul>
      </div>
    );
  }
}

// const CardIndex = ({reviewTest})
// {
//   const cardArray = reviewTest.map(review => {
//     <ReviewCard
//     review={review} />
//   })
// }

export default connect(mapStateToProps)(CardIndex);
