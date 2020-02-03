import React from 'react';
// import { render } from 'react-dom';

class ReviewCard extends React.Component {
    render() {
        return (
        <div className="card" key={this.props.id}>
            <div className="reviewer-email"> {this.props.name}</div>
            <div classname="review-text"> {this.props.review} </div>
            <div classname="review-text"> {this.props.date} </div>
        </div>
        );
    }
}

export default ReviewCard;
