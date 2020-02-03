import React from 'react';
import axios from 'axios';

import { connect } from 'react-redux';

import ReviewCard from './ReviewCard';

function mapStateToProps(state) {
    return {
        reviews: state.review.reviews
    };
}

class CardIndex extends React.Component {
    componentDidMount() {
        this.getReviews();
    }

    getReviews = async () => {
        try {
            let response = await axios.get('http://localhost:3000/api/orders/reviews');
        
            this.setReviews(response.data);
        } catch (err) {
            console.log(err);
        }
    };

    setReviews = e => {
        this.props.dispatch({ type: 'UPDATE_REVIEWS', newReviews: e })
    };

    createArray = item => {
        return item.map(i => {
            const review = i.review;
            return <ReviewCard key={i.id} review={review} email={i.customerEmail} />;
        });
    };

    render() {
        return (
          <div id="reviews">
            <h1>Customer reviews</h1>
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
