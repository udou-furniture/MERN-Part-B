import React from 'react';
import { connect } from 'react-redux';
import { render } from 'react-dom';
import axios from 'axios';
import { reviewTest } from '../../test-db';

import ReviewCard from './ReviewCard';
// import {ReviewCard2} from './ReviewCard';

function mapStateToProps(state) {
  console.log(`map Props ${state.review.reviews}`);
  return {
    reviews: state.review.reviews
  };
}

class CardIndex extends React.Component {
  setReviews = e => {
    console.log(`setReviews done`);
    this.props.dispatch({ type: 'UPDATE_REVIEWS', newReviews: e });
  };

  // getReviews = async () => {
  //   let token =
  //     'how do we access the token? authorisation: localStorage.token?';

  //   try {
  //     let response = await axios({
  //       method: 'GET',
  //       url: `/api/orders/reviews`
  //       //  headers: {authorisation: token},
  //     });
  //     console.log(response.data);
  //     this.setReviews(response.data);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  getReviews2 = () => {
    console.log(`get2: ${JSON.stringify(reviewTest)}`);
    this.setReviews(reviewTest);
  };

  componentDidMount() {
    console.log('mounted');
    this.getReviews2();
  }

  createArray = item => {
    console.log(item);
    return item.forEach(i => (<ReviewCard review={i.review}/>));
  };

  render() {
    return (
      <div>
        <ul>{this.createArray(this.props.reviews)}</ul>
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
