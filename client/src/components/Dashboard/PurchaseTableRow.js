import React from 'react';
import { Link } from 'react-router-dom';
import './Dashboard.css';


class PurchaseTableRow extends React.Component {
    render() {
        return (
            <div className="purchased-card">
            
                <div className="purchased-card-info">
                    <div className="dimensions">
                        <p>Dimensions: {this.props.order.configuration.height * 120 }{' '} x {this.props.order.configuration.depth* 40}{' '} x {this.props.order.configuration.width * 120}</p>
                    </div>
                    {/* <div className="color" */}
                    <h3>Colour:</h3>
                    <p>{this.props.order.configuration.colour}</p>
                    <h3>Price:</h3>
                    <p>${this.props.order.configuration.price}</p>
                    <Link to={`/leave-review/${this.props.order._id}`}><button type='button'>Leave a Review</button></Link>
                </div>   

                {/* <p>
                    {this.props.order.review}
                </p> */}
            </div> 



        );
    }
}

export default PurchaseTableRow