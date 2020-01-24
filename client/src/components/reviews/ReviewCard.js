import React from 'react';
import { connect } from 'react-redux';
import { render } from 'react-dom';
import axios from 'axios';
import { reviewTest } from '../../test-db';

function mapStateToProps(state) {
  return {
    review: state.review.reviews
  };
}

// export const ReviewCard2 = ({ review, id }) => {
//   return <li key={id}>{review}</li>;
// }

class ReviewCard extends React.Component {
  // setReviews = (e) => {
  //   this.props.dispatch({ type: 'UPDATE_REVIEWS', newReview: e });
  // };

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

  // componentDidMount() {
  //   this.getReviews();
  // }

  render() {
    return (
      <div>
        This is a review Card
        {/* {this.props.reviews.map(review => (
            <li>{review}</li>
          ))} */}
        <li>{this.props.review}</li>
      </div>
    );
  }
}

export default connect(mapStateToProps)(ReviewCard);
